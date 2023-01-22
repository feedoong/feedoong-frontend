chrome.tabs.getCurrent(function (tab) {
  chrome.tabs.update(tab.id, {
    url: "https://dev.feedoong.io",
    highlighted: true,
  });
});
