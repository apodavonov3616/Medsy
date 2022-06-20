import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.username}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div>
            <Link className="button" to="/signup">Sign Up</Link>
            <Link className="button" to="/login">Log In</Link>
        </div>
    );

    return <div>
        {display}
    </div>
};

export default Greeting;
