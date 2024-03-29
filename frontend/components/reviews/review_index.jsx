import React from 'react'
import { connect } from 'react-redux';
import { selectAllReviews } from '../../reducers/allReviews';
import { fetchReviews, deleteReview } from './../../actions/review_actions';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import ReviewItem from "./review_item"

class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.medicationId)
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteReview(this.props.reviewId);
        window.location.reload()
    }

    render() {
        let { reviews, currentUser, deleteReview } = this.props;
        let reviewsList = reviews.map(review => {
            return (
                // <div>
                <li className="review-index" key={review.id}>
                    <ReviewItem
                        review={review}
                        currentUser={currentUser}
                        fetchReviews={fetchReviews}
                        reviewId={review.id}
                        deleteReview={deleteReview}
                    />
                    <br />
                </li>
                // </div>
            )
        })

        return (
            <div>
                <div className='reviews-title'>
                    {reviewsList.length} reviews
                </div>
                <ul>
                    {reviewsList}
                </ul>

            </div >
        )
    }
}



const mapStateToProps = state => {
    return {
        reviews: selectAllReviews(state.entities.reviews),
        currentUser: state.entities.users[state.session.id],
    };
};

const mapDispatchToProps = dispatch => {

    return {
        fetchReviews: productId => dispatch(fetchReviews(productId)),
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsIndex);