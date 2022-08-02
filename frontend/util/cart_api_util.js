export const fetchCartMeds = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/carts'
    })
};

export const fetchCartMed = (cartMedId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/carts/${cartMedId}`
    })
};

export const createCartMed = (cartMed) => {
    debugger
    return $.ajax({
        method: 'POST',
        url: '/api/carts',
        data: { cart_med: cartMed }
    })
};

export const updateCartMed = (cartMed) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/carts/${cartMed.id}`,
        data: { cart_med: cartMed }
    })
};

export const destroyCartMed = (cartMedId) => {
    debugger
    return $.ajax({
        method: 'DELETE',
        url: `/api/carts/${cartMedId}`
    })
};