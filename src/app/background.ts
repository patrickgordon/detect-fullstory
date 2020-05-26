chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "highlight_excluded") {
    chrome.tabs.executeScript(
      {
        file: "js/content.js",
      },
      () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          var [activeTab] = tabs;

          chrome.tabs.sendMessage(activeTab.id, message);

          sendResponse({});
          return true;
        });
      }
    );
  }

  sendResponse({});
  return true;
});
