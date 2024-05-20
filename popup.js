document.getElementById('closeTabsButton').addEventListener('click', () => {
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        if (tab.url.includes('bilibili.com')) {
          chrome.tabs.remove(tab.id);
        }
      });
    });
    window.close();  // 关闭插件弹出窗口
  });