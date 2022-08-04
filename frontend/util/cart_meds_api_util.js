export const fetchCartMeds = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/cart_meds'
    })
};

export const fetchCartMed = (cartMedId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/cart_meds/${cartMedId}`
    })
};

export const createCartMed = (cartMed) => {
    return $.ajax({
        method: 'POST',
        url: '/api/cart_meds',
        data: { cart_med: cartMed }
    })
};

export const updateCartMed = (cartMed) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/cart_meds/${cartMed.id}`,
        data: { cart_med: cartMed }
    })
};

export const destroyCartMed = (cartMedId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/cart_meds/${cartMedId}`
    })
};