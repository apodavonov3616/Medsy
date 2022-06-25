import { connect } from "react-redux";
import { fetchMedication } from '../../actions/medication_actions';
import MedicationShow from './medication_show';
import * as MedicationAPIUtil from "../../util/medication_util";

const mSTP = (state, ownProps) => {
  return {
    medication: state.entities.medications[ownProps.match.params.medicationId],
    currentUserId: state.session.id,
  }
}

const mDTP = (dispatch) => {
  return {
    fetchMedication: (medicationId) => dispatch(fetchMedication(medicationId))
  }
}

export default connect(mSTP, mDTP)(MedicationShow);