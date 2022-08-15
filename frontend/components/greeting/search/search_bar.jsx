import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMedications } from '../../../actions/medication_actions'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(e) {
        this.setState({ search: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/search/${this.state.search}`);
        this.setState({ search: '' })
    }

    //redirect on logout, yes
    //when not loggedin, open modal to login
    //confirmation
    //readme
    //console

    render() {

        return (

            <div className="temporary-search-container">
                <div className="search-bar-container">
                    <form onSubmit={this.handleSubmit} className="search-form">
                        <div className="search-input-container">
                            <input type="text"
                                placeholder="    Search Medications..."
                                value={this.state.search}
                                onChange={this.update}
                                className="search-input" />
                            <button className="search-bar-button"></button>
                        </div>
                    </form>
                </div>
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

export default withRouter(connect(mSTP, mDTP)(SearchBar));