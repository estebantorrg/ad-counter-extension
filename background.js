chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "get_ad_count_from_background") {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { message: "count_ads" }, function(response) {
          if (response) {
            sendResponse({ count: response.count });
          } else {
            sendResponse({ count: 0 });
          }
        });
      });
      return true;
    }
  }
);