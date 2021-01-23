declare namespace chrome {
  declare namespace runtime {
    declare namespace onInstalled {
      function addListener(listener: Function)
    }
  }

  declare namespace declarativeContent {
    declare namespace onPageChanged {
      function removeRules(param: any, callback: Function)
      function addRules(param: {conditions: any[], actions: any[]}[])
    }
    class PageStateMatcher { constructor(match: any) }
    class ShowPageAction {}
  }
}