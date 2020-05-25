var $ = require("jquery");

chrome.runtime.sendMessage({}, (response) => {
  var checkReady = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(checkReady);
    }
  });
});

const applyDebug = (className: string, colour: string) => {
  $(className).css("border", `1px dashed ${colour}`);
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "highlight_excluded") {
    applyDebug(".fs-exclude", "red");
    sendResponse({});
    return true;
  }

  if (message === "highlight_masked") {
    applyDebug(".fs-mask", "yellow");
    sendResponse({});
    return true;
  }

  if (message === "highlight_unmasked") {
    applyDebug(".fs-unmask", "green");
    sendResponse({});
    return true;
  }

  sendResponse({});
  return true;
});
