import React from 'react'
import { connect } from 'react-redux';
import { selectAllReviews } from '../../reducers/allReviews';
import { fetchReviews } from './../../actions/review_actions';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.medicationId)
    }

    render() {
        debugger
        let { reviews } = this.props;

        const reviewsList = reviews.map(review => {
            return (
                <li key={review.id}>
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
                </li>
            )
        })

        return (
            <div>
                <h3>Reviews</h3>
                <div>
                    {reviewsList}
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        reviews: selectAllReviews(state.entities.reviews)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchReviews: productId => dispatch(fetchReviews(productId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsIndex);