import { RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW } from "./../actions/review_actions";

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REVIEW:
            return Object.assign({}, state, {
                [action.review.id]: action.review
            });
        case RECEIVE_REVIEWS:
            return Object.assign({}, action.reviews);
        case REMOVE_REVIEW:
            return Object.assign({}, state)
        default:
            return state;
    }
};

export default reviewsReducer;