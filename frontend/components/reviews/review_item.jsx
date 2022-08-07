import React from 'react'
import { connect } from 'react-redux';
import { selectAllReviews } from '../../reducers/allReviews';
import { fetchReviews, deleteReview } from './../../actions/review_actions';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

export default class ReviewItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.medicationId)
    }

    handleDelete(e) {
        debugger
        e.preventDefault();
        this.props.deleteReview(this.props.reviewId);
        window.location.reload()
    }

    render() {
        let { reviewId, currentUser, review } = this.props;
        return (
            <div>
                <div>
                    <Link to={`/users/${review.buyer_id}`}>{review.userName}</Link>
                </div>
                <StarRatings
                    rating={review.rating}
                    starDimension="20px"
                    starSpacing="4px"
                    starRatedColor='#f2b01e'
                />
                <div>
                    {review.body}
                </div>
                {currentUser.id === review.buyer_id ?
                    <div className='review-delete-button'>
                        <div onClick={this.handleDelete}>Delete</div>
                    </div>
                    : null}
            </div>
        )
    }
}