chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == "getDOM")
    sendResponse({
      dom: document.getElementsByTagName("body")[0].outerHTML,
      text: document.getElementsByTagName("body")[0].outerText,
    });
  else
    sendResponse({}); // Send nothing..
  return true;
});

