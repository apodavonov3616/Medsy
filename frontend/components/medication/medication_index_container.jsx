import { connect } from "react-redux";
import { fetchMedications } from "../../actions/medication_actions";
import MedicationIndex from './medication_index';

const mSTP = (state) => {
    return {
        medications: Object.values(state.entities.medications)
    }
}

const mDTP = (dispatch) => {
    return {
        fetchMedications: () => dispatch(fetchMedications())
    }
}

export default connect(mSTP, mDTP)(MedicationIndex);