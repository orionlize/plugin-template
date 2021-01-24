declare namespace chrome {
  declare namespace runtime {
    declare namespace onInstalled {
      function addListener(listener: Function)
    }
  }

  declare namespace tabs {
    function query(param: {currentWindow: boolean, active: boolean}, callback?: (tabsArray: any[]) => void)
    function getCurrent(callback: (tab: any) => void)
    declare namespace onUpdated {
      function addListener(listener: (tabId: number) =>void)
    }
  }

  declare namespace pageAction {
    function show(tabId: number, callback?: Function)
  }
}