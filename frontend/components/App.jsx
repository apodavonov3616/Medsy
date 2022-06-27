import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { AuthRoute } from "../util/route_util";
import { Link } from "react-router-dom";
import ModalContainer from './modal/modal_container';
import MedicationShowContainer from "./medication/medication_show_container";
import MedicationIndexContainer from './medication/medication_index_container';




const App = () => (
    <div>
        <header>
            <Link to="/" className="title">Medsy</Link>
            <div className="temporary-search-container"></div>
            <GreetingContainer />
            <ModalContainer />
        </header>

        <Switch>
            <Route exact path="/medications/:medicationId" component={MedicationShowContainer} />
            <Route exact path="/" component={MedicationIndexContainer} />
        </Switch>
    </div>
);

export default App;