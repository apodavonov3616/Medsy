export const fetchReviews = medicationId => {
    return $.ajax({
        method: 'GET',
        url: `api/medications/${medicationId}/reviews`
    })
};

export const createReview = (review, medicationId) => {
    return $.ajax({
        method: 'POST',
        url: `api/medications/${medicationId}/reviews`,
        data: { review: review }
    })
};

export const updateResponse = review => (
    $.ajax({
        method: 'PATCH',
        url: `api/reviews/${review.id}`,
        data: { review: review }
    })
);

export const destroyReview = (reviewId) => {

    return $.ajax({
        url: `/api/reviews/${reviewId}`,
        method: "DELETE"
    });
};

