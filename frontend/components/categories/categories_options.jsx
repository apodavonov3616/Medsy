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
        this.handleSubmit2 = this.handleSubmit2.bind(this);

    };

    // update(e) {
    //     this.setState({category: e.target.value})
    // }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/category/${e.target.value}`);
    }
    handleSubmit2(e) {
        e.preventDefault();
        this.props.history.push(`/search/${e.target.value}`);
    }

    render () {

        return (
            <>
            <div className="temporary-category-container">
                
                <div className="one-category-container">
                    <button
                        value="Diabetes"
                        onClick={this.handleSubmit}
                        className="diabetes-button">
                    </button>
                    <div className="diabetes-category-label">
                        Diabetes
                    </div>
                </div>

                <div className="one-category-container">
                    <button
                        value="Migraine"
                        onClick={this.handleSubmit}
                        className="migrane-button">
                    </button>
                    <div className="migrane-category-label">
                        Migraine
                    </div>
                </div>

                <div className="one-category-container">
                    <button
                        value="Seizure"
                        onClick={this.handleSubmit}
                        className="seizure-button">
                    </button>
                    <div className="seizure-category-label">
                        Seizure
                    </div>
                </div>

                <div className="one-category-container">
                    <button
                        value="GERD"
                        onClick={this.handleSubmit}
                        className="GERD-button">
                    </button>
                    <div className="GERD-category-label">
                        GERD
                    </div>
                </div>

                <div className="one-category-container">
                    <button
                        value="Acne"
                        onClick={this.handleSubmit}
                        className="acne-button">
                    </button>
                    <div className="acne-category-label">
                        Acne
                    </div>
                </div>
                
                <div className="one-category-container">
                    <button
                        value="Allergies"
                        onClick={this.handleSubmit}
                        className="allergies-button">
                    </button>
                    <div className="allergies-category-label">
                        Allergies
                    </div>
                </div>
            </div>

            <div className="category-rhyme-container">
                <button
                        value="Gel"
                        onClick={this.handleSubmit2}
                        className="rhyme-button">
                            Yells for Gels
                </button>
                <button
                        value="vial"
                        onClick={this.handleSubmit2}
                        className="rhyme-button">
                            Aisles of Vials
                </button>
                <button
                        value="tablet"
                        onClick={this.handleSubmit2}
                        className="rhyme-button">
                            Refills on Pills
                </button>
                <button
                        value="injection"
                        onClick={this.handleSubmit2}
                        className="rhyme-button">
                            Inceptions of Injections
                </button>
            </div>

            </>
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