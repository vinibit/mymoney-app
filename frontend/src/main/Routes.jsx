import React from "react"
import { Router, Route, Redirect, hashHistory, IndexRoute } from "react-router"

import AuthFilter from "./AuthFilter"
import Dashboard from "../StatefulDashboard/StatefulDashboard"
import BillingCycle from "../BillingCycle/BillingCycle"

const Routes = () => (
    <Router history={hashHistory}>
        <Route path="/" component={AuthFilter} >
            <IndexRoute component={Dashboard} />    
            <Route path="/billingCycle" component={BillingCycle} />        
        </Route>
        <Redirect from="*" to="/" />
    </Router>
)

export default Routes