chrome.runtime.onInstalled.addListener(() => {
  console.log('插件已安装');
});

chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      if (tab.url.includes('bilibili.com')) {
        chrome.tabs.remove(tab.id);
      }
    });
  });
});