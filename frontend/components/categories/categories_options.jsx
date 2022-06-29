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

                <div one-category-container>
                <button
                value="Diabetes"
                onClick={this.handleSubmit}
                className="diabetes-button">
                </button>
                <div className="category-label">
                    Diabetes
                </div>
                </div>


                <button
                value="Migraine"
                onClick={this.handleSubmit}
                className="migrane-button">
                </button>
                <button
                value="Seizure"
                onClick={this.handleSubmit}
                className="seizure-button">
                    Seizure/Convulsions
                </button>
                <button
                value="GERD"
                onClick={this.handleSubmit}
                className="gerd-button">
                    GERD
                </button>
                <button
                value="Acne"
                onClick={this.handleSubmit}
                className="acne-button">
                    Acne
                </button>
                <button
                value="Allergies"
                onClick={this.handleSubmit}
                className="allergies-button">
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