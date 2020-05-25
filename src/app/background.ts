chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Background got a message!");

  if (message === "highlight_excluded") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      var [activeTab] = tabs;

      console.log(message);

      chrome.tabs.sendMessage(activeTab.id, message);

      sendResponse({});
      return true;
    });
  }

  sendResponse({});
  return true;
});
