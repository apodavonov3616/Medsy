import ReactGA from 'react-ga4';
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
import CartMedsContainer from "./cart_meds/cart_meds_container";
import BottomPage from "./bottom_page/bottom_page"
import ThankYou from "./thank_you/thank_you"

ReactGA.initialize('G-MKGDQV9X4T');



const App = () => {

    useEffect(() => {
        ReactGA.send("pageview")
    }, [])

    return (
        <div className="app-div">
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
                <Route exact path="/cart_meds" component={CartMedsContainer} />
                <Route exact path="/thank_you" component={ThankYou} />
            </Switch>
            <BottomPage />
        </div>
    )
};

export default App;