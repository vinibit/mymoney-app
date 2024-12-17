import React from "react"
import { Router, Route, Redirect, hashHistory } from "react-router"
import { createBrowserHistory } from "history"

import BillingCycle from "../BillingCycle/BillingCycle"
import Dashboard from "../Dashboard/Dashboard"

const history = createBrowserHistory()

const Routes = _ => (
    <Router history={history}>
        <Route path="/" component={Dashboard} />
        <Route path="/billingCycle" component={BillingCycle} />
        <Redirect from="/" to="/dashboard" />
        <Redirect from="*" to="/" />
    </Router>
)

export default Routes