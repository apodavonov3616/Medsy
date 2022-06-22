import React from "react"
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import SessionForm from './session_form'
import { login } from "../../actions/session_actions"
import { openModal, closeModal } from '../../actions/modal_actions';


const mSTP = state => ({
    errors: state.errors,
    formType: 'Login',
    navLink: <Link to="/signup">Register</Link>,
    errors: state.errors.session
})

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SessionForm);