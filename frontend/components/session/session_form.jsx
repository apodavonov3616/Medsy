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

    renderErrors() {
        return (
            <ul>
                {/* {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li> */}
                {/* ))} */}
            </ul>
        );
    }

    render() {

        const signingUp = () => {
            if (this.props.formType === 'Register') {
                return (
                    <label>Email
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')} />
                    </label>
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

        const errors = () => (
            this.props.errors.map((error, i) => <p className="login-errors" key={i}>{error}</p>)
        )

        return (
            < div className="login-form-container" >
                <span className="modal-close" onClick={this.closeModal}>&times;</span>
                Welcome to Medsy!
                {/* < button onClick={openModal('login')} > hi</button > */}
                <br />
                <div className="error">{errors()}</div>
                Please {this.props.formType} or {otherForm()}
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    {/* {this.renderErrors()} */}
                    <div className="login-form">
                        <br />
                        <label>Username:
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        {signingUp()}
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div >
        );
    }
}

export default SessionForm;