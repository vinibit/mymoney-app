import { TAB_SELECTED, TAB_SHOWED } from './TabsActionsTypes'

function selectTab(tabId) {
            
    return {
        type: TAB_SELECTED,
        payload: tabId
    }
}

function showTabs(...tabIds) {
    
    const tabsToShow = {}
    tabIds.forEach(id => tabsToShow[id] = true)
    return {
        type: TAB_SHOWED,
        payload: tabsToShow
    }
}

export { selectTab, showTabs }