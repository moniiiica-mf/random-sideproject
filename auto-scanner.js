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

// Wait for modal/popup to be dismissed or declined (Ticketmaster-specific)
async function waitForTicketDecline() {
  return new Promise((resolve) => {
    console.log('⏳ Waiting for you to accept or decline this ticket...');

    let modalCheckInterval;
    let backButtonObserver;

    // Ticketmaster common modal/overlay selectors
    const ticketModalSelectors = [
      'dialog',
      '[role="dialog"]',
      '[role="alertdialog"]',
      '.modal',
      '[class*="modal"]',
      '[class*="Modal"]',
      '[class*="overlay"]',
      '[class*="Overlay"]',
      '[class*="drawer"]',
      '[class*="Drawer"]',
      'aside[role="dialog"]'
    ];

    // Check if modal/overlay is dismissed
    const checkModalDismissed = () => {
      const modals = ticketModalSelectors.map(sel => document.querySelector(sel)).filter(Boolean);

      // If no modals found, it's dismissed
      if (modals.length === 0) return true;

      // Check if all modals are hidden
      return modals.every(modal => {
        const style = window.getComputedStyle(modal);
        return style.display === 'none' ||
               style.visibility === 'hidden' ||
               style.opacity === '0' ||
               !modal.offsetParent;
      });
    };

    // Watch for modal dismissal
    modalCheckInterval = setInterval(() => {
      if (checkModalDismissed()) {
        console.log('✓ Ticket declined/dismissed - looking for next ticket...');
        cleanup();
        resolve();
      }
    }, 300); // Check every 300ms for faster response

    // Watch for "Back" or "No Thanks" button clicks (common on Ticketmaster)
    const watchForBackButton = () => {
      const buttonSelectors = [
        'button[aria-label*="back" i]',
        'button[aria-label*="close" i]',
        'button[aria-label*="cancel" i]',
        'button[data-testid*="back"]',
        'button[data-testid*="close"]',
        'button:has-text("No Thanks")',
        'button:has-text("Back")',
        'button:has-text("Cancel")',
        '.close-button',
        '[class*="close"]',
        '[class*="back"]'
      ];

      document.addEventListener('click', (e) => {
        const clickedElement = e.target.closest('button, a, [role="button"]');
        if (clickedElement) {
          const text = clickedElement.textContent.toLowerCase();
          const ariaLabel = (clickedElement.getAttribute('aria-label') || '').toLowerCase();

          if (text.includes('back') || text.includes('cancel') || text.includes('no thanks') ||
              ariaLabel.includes('back') || ariaLabel.includes('close') || ariaLabel.includes('cancel')) {
            console.log('✓ Decline button clicked - waiting for next ticket...');
            setTimeout(() => {
              cleanup();
              resolve();
            }, 500);
          }
        }
      }, { once: false });
    };

    watchForBackButton();

    // ESC key handler
    const escHandler = (e) => {
      if (e.key === 'Escape') {
        console.log('✓ ESC pressed - ticket declined');
        setTimeout(() => {
          cleanup();
          resolve();
        }, 500);
      }
    };
    document.addEventListener('keydown', escHandler);

    // Cleanup function
    const cleanup = () => {
      if (modalCheckInterval) clearInterval(modalCheckInterval);
      document.removeEventListener('keydown', escHandler);
    };

    // Safety timeout (60 seconds for Ticketmaster's timer)
    setTimeout(() => {
      console.log('⏱️ Ticket timer expired - moving to next');
      cleanup();
      resolve();
    }, 60000);
  });
}

// Set up filters once at the start
async function setupFilters() {
  try {
    console.log('🔧 Setting up Ticketmaster filters...');

    // Wait for page to load
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Quantity filter
    try {
      const quantitySelector = await waitFor("#filter-bar-quantity", { timeout: 5000 });
      quantitySelector.value = "1";
      quantitySelector.dispatchEvent(new Event("change", { bubbles: true }));
      console.log('✓ Quantity set to 1');
    } catch (e) {
      console.log('⚠️ Quantity filter not found (may not be needed)');
    }

    // Min price filter
    try {
      const priceInput = await waitFor('input[aria-describedby="label-description-min"]', { timeout: 5000 });
      priceInput.focus();
      setNativeValue(priceInput, "500");
      priceInput.dispatchEvent(new Event("input", { bubbles: true }));

      await new Promise(resolve => {
        requestAnimationFrame(() => {
          priceInput.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
          priceInput.dispatchEvent(new Event("change", { bubbles: true }));
          priceInput.blur();
          resolve();
        });
      });
      console.log('✓ Min price set to $500');
    } catch (e) {
      console.log('⚠️ Price filter not found (may not be needed)');
    }

    // Wait for filters to apply
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('✅ Filters applied successfully!');

  } catch (error) {
    console.log('⚠️ Filter setup had issues:', error.message);
    console.log('📝 Continuing anyway - filters may not be required');
  }
}

// Find and click the next available ticket
async function findAndClickNextTicket() {
  try {
    console.log('🔍 Scanning for next available ticket...');

    // Wait for ticket list to be stable and available
    const lastLi = await scrollToLastListItem();

    if (lastLi) {
      // Check if ticket is actually clickable/available
      const isDisabled = lastLi.hasAttribute('disabled') ||
                        lastLi.getAttribute('aria-disabled') === 'true' ||
                        lastLi.classList.contains('disabled');

      if (isDisabled) {
        console.log('⏳ Last ticket not available yet, waiting...');
        return 'unavailable';
      }

      console.log('🎫 Ticket found! Clicking now...');
      lastLi.click();

      // Wait for ticket details to load
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('👀 Ticket details opened - review and decide!');

      // Wait for user to accept or decline
      await waitForTicketDecline();

      console.log('🔄 Ready for next ticket');
      return 'declined';
    } else {
      console.log('❌ No tickets found in list');
      return 'no_tickets';
    }

  } catch (error) {
    console.log('❌ Error finding ticket:', error.message);
    return 'error';
  }
}

// Main Ticketmaster auto-scanner loop
async function startAutoScanner() {
  console.log('🎟️  TICKETMASTER AUTO-SCANNER STARTED 🎟️');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📋 How it works:');
  console.log('  1. Scans for next available ticket');
  console.log('  2. Clicks and shows you the ticket');
  console.log('  3. You review and accept/decline');
  console.log('  4. Automatically finds next ticket');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('');

  // Setup filters once at the start
  await setupFilters();

  console.log('');
  console.log('🚀 Starting continuous ticket monitoring...');
  console.log('');

  let scanCount = 0;

  while (true) {
    scanCount++;
    console.log(`\n━━━ Scan #${scanCount} [${new Date().toLocaleTimeString()}] ━━━`);

    const result = await findAndClickNextTicket();

    if (result === 'declined') {
      // Ticket was declined, immediately look for next one
      console.log('⏭️  Moving to next ticket immediately...');
      await new Promise(resolve => setTimeout(resolve, 1000)); // Brief pause to let UI update

    } else if (result === 'unavailable') {
      // Ticket not available yet, wait and retry
      console.log('⏳ Waiting 3 seconds before checking again...');
      await new Promise(resolve => setTimeout(resolve, 3000));

    } else if (result === 'no_tickets') {
      // No tickets in list, wait longer
      console.log('⏳ No tickets available. Waiting 5 seconds...');
      await new Promise(resolve => setTimeout(resolve, 5000));

    } else if (result === 'error') {
      // Error occurred, wait before retry
      console.log('⏳ Error occurred. Waiting 10 seconds before retry...');
      await new Promise(resolve => setTimeout(resolve, 10000));
    }
  }
}

// Initialize scanner
console.log('');
console.log('═══════════════════════════════════════');
console.log('   TICKETMASTER AUTO-SCANNER v2.0');
console.log('═══════════════════════════════════════');
console.log('');
startAutoScanner();
