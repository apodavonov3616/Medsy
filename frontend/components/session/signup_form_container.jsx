import React from "react"
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import SessionForm from './session_form'
import { signup } from "../../actions/session_actions"
import { openModal, closeModal } from '../../actions/modal_actions';


const mSTP = state => ({
    errors: state.errors.session,
    formType: 'Sign Up',
    navLink: <Link to="/login">log in instead</Link>,
    errors: state.errors.session

})

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
})

export default connect(mSTP, mDTP)(SessionForm);