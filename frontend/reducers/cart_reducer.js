import {
    RECEIVE_CART_MEDS,
    RECEIVE_CART_MED,
    REMOVE_CART_MED
} from '../actions/cart_actions'

const cartMedReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_CART_MEDS:
            return action.cartMeds;
        case RECEIVE_CART_MED:
            nextState[action.cartMed.id] = action.cartMed;
            return nextState;
        case REMOVE_CART_MED:
            delete nextState[action.cartMedId];
            return nextState;
        default:
            return oldState;
    }
}

export default cartMedReducer;
