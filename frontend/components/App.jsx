import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { AuthRoute } from "../util/route_util";
import ModalContainer from './modal/modal_container';
import MedicationShowContainer from "./medication/medication_show_container";



const App = () => (
    <div>
        <header>
            <h1 className="title"> Medsy </h1>
            <div className="temporary-search-container"></div>
            <GreetingContainer />
            <ModalContainer />
            {/* <MedicationShowContainer/> */}
        </header>

        <Switch>
            {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
            <Route exact path="/medications/:medicationId" component={MedicationShowContainer} />
        </Switch>
    </div>
);

export default App;