import * as CartMedAPIUtil from '../util/cart_meds_api_util';

export const RECEIVE_CART_MEDS = "RECEIVE_CART_MEDS";
export const RECEIVE_CART_MED = "RECEIVE_CART_MED";
export const REMOVE_CART_MED = "REMOVE_CART_MED";
export const RECEIVE_CART_MED_ERRORS = "RECEIVE_CART_MED_ERRORS";

const receiveCartMeds = (cartMeds) => ({
    type: RECEIVE_CART_MEDS,
    cartMeds
});

const receiveCartMed = (cartMed) => ({
    type: RECEIVE_CART_MED,
    cartMed
});

const removeCartMed = (cartMedId) => ({
    type: REMOVE_CART_MED,
    cartMedId
});

export const fetchCartMeds = () => dispatch => {
    return CartMedAPIUtil.fetchCartMeds().then(cartMeds => (
        dispatch(receiveCartMeds(cartMeds))
    ))
};

export const fetchCartMed = (cartMedId) => dispatch => {
    return CartMedAPIUtil.fetchCartMed(cartMedId).then(cartMed => (
        dispatch(receiveCartMed(cartMed))
    ))
};

export const createCartMed = (cartMed) => dispatch => {
    return CartMedAPIUtil.createCartMed(cartMed).then(cartMed => (
        dispatch(receiveCartMed(cartMed))
    ))
};

export const updateCartMed = (cartMed) => dispatch => {
    return CartMedAPIUtil.updateCartMed(cartMed).then(cartMed => (
        dispatch(receiveCartMed(cartMed))
    ))
};

export const destroyCartMed = (cartMedId) => dispatch => {
    return CartMedAPIUtil.destroyCartMed(cartMedId).then(cartMedId => (
        dispatch(removeCartMed(cartMedId))
    ))
};

const receiveCartMedErrors = errors => ({
    type: RECEIVE_CART_MED_ERRORS,
    errors
});