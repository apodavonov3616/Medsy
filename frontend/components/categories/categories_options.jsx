import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMedications } from './../../actions/medication_actions'

class CategoriesOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: ""
        };

        // this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    // update(e) {
    //     this.setState({category: e.target.value})
    // }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/category/${e.target.value}`);
    }

    render () {

        return (

            <div className="temporary-category-container">
                {/* <form onSubmit={this.handleSubmit} className="category-form">
                    <div className="category-input-container">
                        <input type="text"
                            placeholder= "..."
                            value={this.state.category}
                            onChange={this.update}
                            className="category-input"/>
                    </div>
                </form> */}
                
                <button
                value="Diabetes"
                onClick={this.handleSubmit}
                className="category-input"
                background="https://th.bing.com/th/id/OIP.OF59vsDmwxPP1tw7b_8clQHaE8?pid=ImgDet&rs=1">
                    Diabetes
                </button>
                <button
                value="Migraine"
                onClick={this.handleSubmit}
                className="category-input">
                    Migraine/Headache
                </button>
                <button
                value="Seizure"
                onClick={this.handleSubmit}
                className="category-input">
                    Seizure/Convulsions
                </button>
                <button
                value="GERD"
                onClick={this.handleSubmit}
                className="category-input">
                    GERD
                </button>
                <button
                value="Acne"
                onClick={this.handleSubmit}
                className="category-input">
                    Acne
                </button>
                <button
                value="Allergies"
                onClick={this.handleSubmit}
                className="category-input">
                    Allergies
                </button>

            </div>
        )
    }
}

const mSTP = (state) => {
    return {
        medications: Object.values(state.entities.medications)
    }
};

const mDTP = dispatch => {
    return {
        fetchMedications: () => dispatch(fetchMedications())
    }
};

export default withRouter(connect(mSTP, mDTP)(CategoriesOptions));