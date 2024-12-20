import React from "react"
import { Router, Route, Redirect, hashHistory, IndexRoute } from "react-router"

import App from "./App"
//import Dashboard from "../Dashboard/Dashboard"
import Dashboard from "../StatefulDashboard/StatefulDashboard"
import BillingCycle from "../BillingCycle/BillingCycle"

const Routes = props => (
    <Router history={hashHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={Dashboard} />    
            <Route path="/billingCycle" component={BillingCycle} />        
        </Route>
        <Redirect from="*" to="/" />
    </Router>
)

export default Routes