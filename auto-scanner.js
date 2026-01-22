function waitFor(selector, { timeout = 8000, stableMs = 200 } = {}) {
  //wait for elements to exist
  return new Promise((resolve, reject) => {
    const start = Date.now();
    let lastEl = null;
    let stableTimer = null;

    const tick = () => {
      const el = document.querySelector(selector);

      if (el) {
        if (el === lastEl) {
          if (!stableTimer) {
            stableTimer = setTimeout(() => resolve(el), stableMs);
          }
        } else {
          lastEl = el;
          if (stableTimer) clearTimeout(stableTimer);
          stableTimer = null;
        }
      }

      if (Date.now() - start > timeout) {
        reject(new Error(`Timeout waiting for ${selector}`));
        return;
      }
      requestAnimationFrame(tick);
    };

    tick();
  });
}

function setNativeValue(element, value) {
  Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set.call(element, value);
}

function findScrollableAncestor(el) {
  let cur = el.parentElement;
  while (cur) {
    const style = getComputedStyle(cur);
    const overflowY = style.overflowY;
    const canScroll = (overflowY === "auto" || overflowY === "scroll") && cur.scrollHeight > cur.clientHeight;
    if (canScroll) return cur;
    cur = cur.parentElement;
  }
  return document.scrollingElement; // fallback (page)
}

async function scrollToLastListItem() {
  const ul = await waitFor('ul[aria-describedby="ToolbarAriaDescription"]');
  const scroller = findScrollableAncestor(ul);

  const lastLi = ul.querySelector('li[role="menuitem"]:last-child');
  if (!lastLi) return;

  // Scroll the container
  scroller.scrollTop = scroller.scrollHeight;

  lastLi.scrollIntoView({ block: "end" });
  await new Promise(requestAnimationFrame);
  return lastLi;
}

// Wait for modal/popup to be dismissed or declined
async function waitForModalDismiss() {
  return new Promise((resolve) => {
    console.log('Waiting for modal to be dismissed...');

    // Watch for common modal close patterns
    const checkInterval = setInterval(() => {
      // Check if modal/dialog is gone (common selectors)
      const modal = document.querySelector('dialog, [role="dialog"], .modal, [class*="modal"]');

      if (!modal || modal.style.display === 'none' || !modal.offsetParent) {
        console.log('Modal dismissed detected');
        clearInterval(checkInterval);
        resolve();
      }
    }, 500); // Check every 500ms

    // Also listen for ESC key (common way to dismiss)
    const escHandler = (e) => {
      if (e.key === 'Escape') {
        console.log('ESC key pressed - modal likely dismissed');
        clearInterval(checkInterval);
        document.removeEventListener('keydown', escHandler);
        resolve();
      }
    };
    document.addEventListener('keydown', escHandler);

    // Safety timeout (if modal is dismissed but we somehow miss it)
    setTimeout(() => {
      console.log('Modal dismiss timeout reached');
      clearInterval(checkInterval);
      document.removeEventListener('keydown', escHandler);
      resolve();
    }, 30000); // 30 second safety timeout
  });
}

async function scanAndPurchase() {
  try {
    console.log('Setting up filters...');

    // qty
    const sel = await waitFor("#filter-bar-quantity");
    sel.value = "1";
    sel.dispatchEvent(new Event("change", { bubbles: true }));

    // min price
    const el = await waitFor('input[aria-describedby="label-description-min"]');

    el.focus();
    setNativeValue(el, "500");
    el.dispatchEvent(new Event("input", { bubbles: true }));

    await new Promise(resolve => {
      requestAnimationFrame(() => {
        el.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
        el.dispatchEvent(new Event("change", { bubbles: true }));
        el.blur();
        resolve();
      });
    });

    console.log('Scrolling to last item...');
    const lastLi = await scrollToLastListItem();
    if (lastLi) {
      console.log('Clicking on item...');
      lastLi.click();

      // Wait a moment for modal/popup to appear
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Item clicked - waiting for your decision...');

      // Wait for user to decline/dismiss the modal
      await waitForModalDismiss();

      console.log('Modal dismissed - will scan again shortly');
      return 'declined';
    }

    console.log('Scan completed successfully');
    return 'success';
  } catch (error) {
    console.log('Scan failed:', error.message);
    return 'error';
  }
}

// Main loop with rescan interval
async function startAutoScanner() {
  const RESCAN_INTERVAL = 2000; // 2 seconds between rescans after decline
  const ERROR_RETRY_INTERVAL = 10000; // 10 seconds on error

  console.log('Starting auto-scanner...');
  console.log('After you decline an item, it will automatically scan for the next one!');

  while (true) {
    console.log(`[${new Date().toLocaleTimeString()}] Running scan...`);

    const result = await scanAndPurchase();

    if (result === 'declined') {
      console.log(`Item declined. Waiting ${RESCAN_INTERVAL / 1000} seconds before next scan...`);
      await new Promise(resolve => setTimeout(resolve, RESCAN_INTERVAL));
    } else if (result === 'success') {
      console.log('Item accepted/purchased! Continuing to scan...');
      await new Promise(resolve => setTimeout(resolve, RESCAN_INTERVAL));
    } else {
      console.log(`Error occurred. Waiting ${ERROR_RETRY_INTERVAL / 1000} seconds before retry...`);
      await new Promise(resolve => setTimeout(resolve, ERROR_RETRY_INTERVAL));
    }
  }
}

// Start the scanner
startAutoScanner();
