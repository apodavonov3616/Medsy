import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.demoUser = this.demoUser.bind(this);
        this.errors = this.errors.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        if (!this.props.errors) this.props.closeModal()
    }

    closeModal(e) {
        e.preventDefault();
        this.props.closeModal();
    }

    demoUser(e) {
        e.preventDefault();
        const demo = { username: "Demo User", password: "password" };
        this.props.processForm(demo).then(this.props.closeModal);
    }

    errors = () => (
        this.props.errors.map((error, i) => <p className="login-errors" key={i}>{error}</p>)
    )


    render() {

        const signingUp = () => {
            if (this.props.formType === 'Register') {
                return (
                    <div>
                        <br />
                        <label className="username-password-input">Email
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input" />
                        </label>
                    </div>
                );
            }
        };

        const otherForm = () => {
            if (this.props.formType == "Register") {
                return (
                    <button onClick={openModal('login')}>Sign In</button>
                )
            } else {
                return <button onClick={openModal('register')}>Register</button>
            }
        }
        const openModal = (formType) => {
            return e => {
                e.preventDefault();
                this.props.openModal(formType);
            }
        }

        let demoUser = () => {
            if (this.props.formType == "Sign In") {
                return (
                    <div>
                        <span className="or">OR</span>
                        <br />
                        <br />
                        <div className="login-register-button">
                            <br />
                            <br />
                            <input
                                type="submit"
                                value="Log In as Demo User"
                                className="form-button"
                                onClick={this.demoUser}
                            />
                        </div>
                    </div>
                )
            }
        };


        return (
            < div className="login-form-container" >
                <span className="modal-close" onClick={this.closeModal}>&times;</span>
                {/* <br /> */}
                {/* <div className="form-welcome">Welcome to Medsy!</div> */}
                <div className='form'>
                    <div className="error">{this.errors()}</div>
                    <span className="sign-in-v-register">
                        <div>{this.props.formType}</div>
                        <div>{otherForm()}</div>
                    </span>
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <div className="login-form">
                            <br />
                            <label className="username-password-input">Username:
                                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <label className="username-password-input">Password:
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                />
                            </label>
                            {signingUp()}
                            <br />
                            <input type="checkbox" name="Stay Signed In" id="stay-signed-in" />
                            <label htmlFor="stay-signed-in">Stay Signed In</label>
                            <br />
                            <br />
                            <label className="login-register-button">
                                <br />
                                <br />
                                <input className="session-submit" type="submit" value={this.props.formType} />
                            </label>
                            <br />
                            <br />
                        </div>
                    </form>
                    {demoUser()}
                </div>
                <div className="sign-in-policy">By clicking Sign In, you agree to Medsy's Terms
                    of Use and Privacy Policy. Medsy may send you
                    communications; you may change your preferences
                    in your account settings. We'll never post without
                    your permission.</div>
            </div >
        );
    }
}

export default SessionForm;