import React from "react"
import { Switch, Route, Redirect } from "react-router"

import Dashboard from "../StatefulDashboard/StatefulDashboard"
import BillingCycle from "../BillingCycle/BillingCycle"

const Routes = () => (
    <div className="content-wrapper">
        <Switch>
            <Route exact path="/" component={Dashboard} />            
            <Route path="/billingCycle" component={BillingCycle} />
            <Redirect from="*" to="/" />
        </Switch>
    </div>
)

export default Routes