import React, { useEffect } from 'react';
import MedicationIndexItem from '../../../components/medication/medication_index_item';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMedications } from '../../../actions/medication_actions';

const SearchShow = (props) => {

    useEffect(() => {
        fetchMedications();
    }, []);

    const { medications, fetchMedications } = props

    const filterFunction = () => {
        return props.medications.filter((medication) => {
            return (medication.name.toLowerCase().includes(props.searched))
        })
    };

    // const clearSearch = () => {
    //     let input = document.getElementsByClassName('search-input')
    //     input.value = ""
    // }

    return (
        <div className="search-result-container">
            <ul className="search-result">
                {
                    filterFunction().map(medication => <MedicationIndexItem
                        medication={medication}
                        key={medication.id}
                    />)
                }
            </ul>
        </div>
    )
}

const mSTP = (state, ownProps) => {
    return {
        medications: Object.values(state.entities.medications),
        searched: ownProps.match.params.searched.toLowerCase()
    }
};

const mDTP = dispatch => {
    return {
        fetchMedications: () => dispatch(fetchMedications())
    }
};

export default connect(mSTP, mDTP)(SearchShow);