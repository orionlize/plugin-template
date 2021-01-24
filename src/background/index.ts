export {}

chrome.runtime.onInstalled.addListener(() => {
  console.log('background ts run success!', chrome)
})

chrome.tabs.onUpdated.addListener(tabId => {
  console.log('open page action success!')
  chrome.pageAction.show(tabId)
})