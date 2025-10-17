chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "count_ads") {
      const adSelectors = [
        '.ad',
        '[id^="ad"]',
        '[class^="ad"]',
        'ins.adsbygoogle',
        '[id*="google_ads"]'
      ];

      const selectorString = adSelectors.join(', ');
      const adElements = document.querySelectorAll(selectorString);

      sendResponse({ count: adElements.length });
    }
  }
);