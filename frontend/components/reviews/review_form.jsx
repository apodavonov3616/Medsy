import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import React from 'react'
import StarRatings from 'react-star-ratings';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            body: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeRating = this.changeRating.bind(this);
        this.changeBody = this.changeBody.bind(this);
    };

    handleSubmit(event) {
        event.preventDefault();
        this.props.createReview(this.state, this.props.medicationId);
        this.setState({ rating: 0, body: '', buyer_id: this.props.currentUser.id });
        window.location.reload()

    }

    changeRating(newRating) {
        this.setState({
            rating: newRating
        });
    }


    changeBody(event) {
        event.preventDefault();
        this.setState({ body: event.target.value });
    }

    render() {
        return (
            <form className="review-form" onSubmit={this.handleSubmit}>
                <label htmlFor="rating">Rating:</label>
                <StarRatings
                    rating={this.state.rating}
                    starRatedColor='#ffd700'
                    starHoverColor='#ffd700'
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name='rating'
                    starDimension="22px"
                    starSpacing="3px"
                />

                <label htmlFor="body">Body</label>
                <textarea value={this.state.body} id="body" cols="50" rows="10" onChange={this.changeBody}></textarea>

                <button className="submit-review">Submit Review</button>
            </form>
        )
    };
}

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
    };
};

const mapDispatchToProps = dispatch => ({
    createReview: (medicationId, review) => dispatch(createReview(medicationId, review))
})

export default connect(mSTP, mapDispatchToProps)(ReviewForm);