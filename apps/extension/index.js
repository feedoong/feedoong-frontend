chrome.tabs.getCurrent(function (tab) {
  chrome.tabs.update(tab.id, {
    url: "https://feedoong.io",
    highlighted: true,
  });
});
