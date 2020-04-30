document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById("destroy-paywall-button");
  var buttonTextOnly = document.getElementById("destroy-paywall-button-text-only");
  button.addEventListener('click', function () {
    button.parentNode.removeChild(button);
    chrome.tabs.getSelected(null, function (tab) {
      // Send a request to the content script.
      chrome.tabs.sendMessage(tab.id, { action: "getDOM" }, function (response) {
        console.log("response.dom: ", response.dom);
        var articleContent = response.dom;
        if (!articleContent) {
          articleContent = "Reload the page with the extension window open to view paywall-restricted content"
        }
        var popupDiv = document.getElementById("content-div");
        var div = popupDiv.appendChild(document.createElement('div'));
        let frag = document.createRange().createContextualFragment(articleContent);
        div.appendChild(frag);
      });
    });
  });

  buttonTextOnly.addEventListener('click', function () {
    buttonTextOnly.parentNode.removeChild(buttonTextOnly);
    chrome.tabs.getSelected(null, function (tab) {
      // Send a request to the content script.
      var articleContent;
      chrome.tabs.sendMessage(tab.id, { action: "getDOM" }, function (response) {
        console.log("response.text: ", response.text);
        var articleContent = response.text;
        if (!articleContent) {
          articleContent = "Reload the page with the extension window open to view paywall-restricted content"
        }
        var popupDiv = document.getElementById("content-div");
        var div = popupDiv.appendChild(document.createElement('div'));
        div.appendChild(document.createTextNode(articleContent));
      });
    });
  });
});