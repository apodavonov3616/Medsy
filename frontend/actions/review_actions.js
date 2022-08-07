import * as ReviewsApiUtil from './../util/review_api_util';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';


export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
});

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

export const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})

const removeReviews = () => ({
    type: CLEAR_REVIEWS
})

export const fetchReviews = medicationId => dispatch => {
    return ReviewsApiUtil.fetchReviews(medicationId)
        .then(reviews => {
            return dispatch(receiveReviews(reviews))
        }, err => {
            return dispatch(receiveReviewErrors(err))
        })
};

export const createReview = (review, medicationId) => dispatch => (
    ReviewsApiUtil.createReview(review, medicationId)
        .then(review => (
            dispatch(receiveReview(review))
        ), err => (
            dispatch(receiveReviewErrors(err))
        ))
);

export const updateReview = (review) => dispatch => (
    ReviewsApiUtil.updateResponse(review)
        .then(review => (
            dispatch(receiveReview(review))
        ), err => (
            dispatch(receiveReviewErrors(err))
        ))
);

export const deleteReview = (reviewId) => dispatch => (
    ReviewsApiUtil.destroyReview(reviewId)
        .then(review => dispatch(removeReview(review)))
);

