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

async function scanAndPurchase() {
  try {
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

    const lastLi = await scrollToLastListItem();
    if (lastLi) {
      lastLi.click();
    }

    console.log('Scan completed successfully');
    return true;
  } catch (error) {
    console.log('Scan failed:', error.message);
    return false;
  }
}

// Main loop with rescan interval (25 seconds to avoid detection)
async function startAutoScanner() {
  const RESCAN_INTERVAL = 25000; // 25 seconds - safe interval to avoid bans

  console.log('Starting auto-scanner with 25-second interval...');

  while (true) {
    console.log(`[${new Date().toLocaleTimeString()}] Running scan...`);

    const success = await scanAndPurchase();

    if (success) {
      console.log('Item found and purchase initiated!');
      // Optionally break here if you want to stop after first successful purchase
      // break;
    }

    console.log(`Waiting ${RESCAN_INTERVAL / 1000} seconds before next scan...`);
    await new Promise(resolve => setTimeout(resolve, RESCAN_INTERVAL));
  }
}

// Start the scanner
startAutoScanner();
