import React from "react";
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
        };
    }

    handleInput = type => {
        return e => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const user = Object.assign( {}, this.state );
        this.props.processForm(user); 
    }

    render() {
        const otherFormType = (this.props.formType === "Sign In") ? ("Register") : ("Sign In");
        const otherFormLink = (this.props.formType === "Sign In") ? ("register") : ("Sign In");
        
        const name = (
            <>
                <br></br>
                <label classEmail="email-label">Email:
                    <input 
                        classEmail="email-input"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInput("email")}
                    />
                </label>
            </>
        )   

        return (
            <div className="session-form-container">
                <h1 className="session-form-header">{this.props.formType}</h1>
                <br></br>

                <form className="session-form">
                    <label className="username-label">username:
                        <input
                            className="username-input"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput("username")}
                        />
                    </label>

                    { (this.props.formType === "Sign Up") && email }

                    <br></br>
                    <label className="password-label">Password:
                        <input 
                            className="password-input"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput("password")}
                        />
                    </label>
                    <br></br>
                    <button 
                        className="session-form-button"
                        onClick={this.handleSubmit}>
                            {this.props.formType}
                    </button>
                </form>
            </div>
        )
    }
}