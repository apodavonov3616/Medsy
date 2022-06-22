import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { AuthRoute } from "../util/route_util";
import ModalContainer from './modal/modal_container';


const App = () => (
    <div>
        <header>
            <h1> Medsy </h1>
            <GreetingContainer />
            <ModalContainer />
        </header>

        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;