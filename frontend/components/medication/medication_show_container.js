import { connect } from "react-redux";
import MedicationShow from "./medication_show";
import { fetchMedication } from "../../actions/medication_actions";


const mSTP = (state, ownProps) => ({
    medication: state.entities.medications[ownProps.match.params.medicationId],
    currentUser: state.entities.users[state.session.id],
    user: state.session.id
  });
  
  const mDTP = (dispatch) => ({
    fetchMedication: (medicationId) => dispatch(fetchMedication(medicationId)),
  });
  
  export default connect(mSTP, mDTP)(MedicationShow);
  