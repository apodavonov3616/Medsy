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
import SearchShow from "./../components/greeting/search/search_show";
import SearchBar from "./greeting/search/search_bar";
import CategoriesContainer from "./categories/categories_container";
import CategoriesOptions from "./categories/categories_options";
import CartContainer from "./cart/cart_container";


const App = () => (
    <div>
        <header>
            <Link to="/" className="title header-element">Medsy</Link>
            <SearchBar />
            <GreetingContainer />
            <ModalContainer />
        </header>
        <div className="header-rectangle"></div>
        <br />
        <CategoriesOptions />
        <br />
        <br />
        <br />
        <br />
        <Switch>
            <Route exact path="/medications/:medicationId" component={MedicationShowContainer} />
            <Route exact path="/" component={MedicationIndexContainer} />
            <Route exact path="/search" component={MedicationIndexContainer} />
            <Route exact path="/search/:searched" component={SearchShow} />
            <Route exact path="/category/:category" component={CategoriesContainer} />
            <Route exact path="/carts" component={CartContainer} />

        </Switch>
        {/* <BottomPage/> */}
    </div>
);

export default App;