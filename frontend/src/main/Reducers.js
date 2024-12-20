import { combineReducers } from 'redux'

import DashboardReducer from '../Dashboard/DashboardReducer'
import TabsReducer from '../Common/Tabs/TabsReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tabs: TabsReducer
})

export default rootReducer
