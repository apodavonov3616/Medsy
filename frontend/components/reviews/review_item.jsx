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
        e.preventDefault();
        this.props.deleteReview(this.props.reviewId);
        window.location.reload()
    }

    render() {
        let { reviewId, currentUser, review } = this.props;
        return (
            <div>
                <div>
                    {/* <Link to={`/users/${review.buyer_id}`}>{review.userName}</Link> */}
                    <span>
                        {review.buyer_name}
                    </span>
                </div>
                <StarRatings
                    rating={review.rating}
                    starDimension="20px"
                    starSpacing="4px"
                    starRatedColor='#222222'
                />
                <div>
                    {review.body}
                </div>
                {currentUser && currentUser.id === review.buyer_id ?
                    <button className='review-delete-button' onClick={this.handleDelete}>Delete</button>
                    : null}
            </div>
        )
    }
}