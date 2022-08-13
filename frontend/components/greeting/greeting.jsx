import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search/search_bar';
import CartMedsContainer from '../cart_meds/cart_meds_container';

const Greeting = (props) => {

    const { currentUser, logout } = props;

    const openModal = (formType) => {
        return e => {
            e.preventDefault();
            props.openModal(formType);
        }
    }

    const display = currentUser ? (
        <div className="greeting">
            <button onClick={logout} className="logout-button">Log Out</button>
            <Link className="cart-meds-button" to={`/cart_meds`}>
                <img className="cart-picture" src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg" alt="cart" />
            </Link>
            <p>Hello, {currentUser.username}</p>
        </div>
    ) : (
        <div className="greeting">
            <button className="modal-login-button" onClick={openModal('login')}>
                <div>Sign in</div>
            </button>

            {/* <button className="modal-signup-button" onClick={openModal('register')}>
                <div>Register</div>
            </button> */}
        </div>
    );

    return <div className="greeting-container">
        {display}
        {/* <SearchBar/>  */}
    </div>
};

export default Greeting;
