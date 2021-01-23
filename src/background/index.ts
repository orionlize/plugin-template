export {}

chrome.runtime.onInstalled.addListener(() => {
  console.log('background ts run success!', chrome)

  if (chrome.declarativeContent) {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({pageUrl: {}})
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }])
    })
  }
})