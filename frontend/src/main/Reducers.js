import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../Dashboard/DashboardReducer'
import TabsReducer from '../Common/Tabs/TabsReducer'
import BillingCycleReducer from '../BillingCycle/BillingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tabs: TabsReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer