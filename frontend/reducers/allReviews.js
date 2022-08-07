export const selectAllReviews = allReviews => {
    return Object.keys(allReviews).map(id => allReviews[id]);
};