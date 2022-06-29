import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search/search_bar';

const Greeting = (props) => {

    const { currentUser, logout } = props;

    const openModal = (formType) => {
        return e => {
            e.preventDefault();
            props.openModal(formType);
        }
    }

    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.username}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div>
            <button className="modal-login-button" onClick={openModal('login')}>
                <div>Sign in</div>
            </button>
            {/* <button className="modal-signup-button" onClick={openModal('register')}>
                <div>Register</div>
            </button> */}
        </div>
    );

    return <div>
        {display}
        {/* <SearchBar/>  */}
    </div>
};

export default Greeting;
