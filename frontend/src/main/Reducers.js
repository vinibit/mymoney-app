import { combineReducers } from 'redux'

import DashboardReducer from '../Dashboard/DashboardReducer'
import TabsReducer from '../Common/Tabs/TabsReducer'
import BillingCycleReducer from '../BillingCycle/BillingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tabs: TabsReducer,
    billingCycle: BillingCycleReducer
})

export default rootReducer