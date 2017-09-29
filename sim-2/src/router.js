import React from "react"
import { Switch, Route } from "react-router-dom"

import AuthPage from "./components/authpage/AuthPage"
import Dashboard from "./components/dashboard/Dashboard"
import Header from "./components/header/Header"

//import StepOne from "./Wizard/StepOne/StepOne"
// import StepTwo from "./Wizard/StepTwo/StepTwo"
// import StepThree from "./Wizard/StepThree/StepThree"
// import StepFour from "./Wizard/StepFour/StepFour"
// import StepFive from "./Wizard/StepFive/StepFive"


export default (
    <Switch>

        <Route component={AuthPage} exact path='/' />
        {/* <Route component={Dashboard} path='/dashboard'/> */}
        <Route path='/dashboard' render={() => {
            return (
                <div>
                    <Header />
                    <Dashboard />
                </div>
            )
        }} />

    </Switch>
)