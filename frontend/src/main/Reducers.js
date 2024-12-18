import { combineReducers } from 'redux'

import DashboardReducer from '../Dashboard/DashboardReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer
})

export default rootReducer
