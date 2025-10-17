document.addEventListener('DOMContentLoaded', function() {

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const activeTab = tabs[0];
    
    chrome.tabs.sendMessage(activeTab.id, { message: "count_ads" }, function(response) {
      if (chrome.runtime.lastError) {
        console.log("Error:", chrome.runtime.lastError.message);
        document.getElementById('ad-count').textContent = 'Error';
      } else {
        if (response) {
          document.getElementById('ad-count').textContent = response.count;
        } else {
          document.getElementById('ad-count').textContent = '0';
        }
      }
    });
  });

});