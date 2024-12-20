import { TAB_SELECTED, TAB_SHOWED } from './TabsActionsTypes'

const INITIAL_STATE = { 
    selected: '', 
    visibleTabs: {} 
}

const TabsReducer = (state = INITIAL_STATE, {type, payload}) => {
    
    switch (type) {
        case TAB_SELECTED:
            return { ...state, selected: payload }
        case TAB_SHOWED:
            return { ...state, visibleTabs: payload }
        default:
            return state
    }
}

export default TabsReducer