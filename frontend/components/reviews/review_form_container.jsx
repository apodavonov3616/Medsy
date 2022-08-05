import React from 'react';
import { addReview, editReview, deleteReview } from '../../actions/review_actions';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    errors: Object.values(state.errors.review),
});

const mapDispatchToProps = (dispatch) => ({
    addReview: (review) => dispatch(addReview(review)),
    editReview: (reviewId, review) => dispatch(editReview(reviewId, review)),
    deleteReview: (review) => dispatch(deleteReview(review)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)