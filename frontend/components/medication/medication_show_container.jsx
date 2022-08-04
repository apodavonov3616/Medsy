import { connect } from "react-redux";
import { fetchMedication } from '../../actions/medication_actions';
import MedicationShow from './medication_show';
import * as MedicationAPIUtil from "../../util/medication_util";
import { createCartMed } from '../../actions/cart_meds_actions';


const mSTP = (state, ownProps) => {
  return {
    medication: state.entities.medications[ownProps.match.params.medicationId],
    currentUserId: state.session.id,
    carts: state.entities.carts,
  }
}

const mDTP = (dispatch) => {
  return {
    fetchMedication: (medicationId) => dispatch(fetchMedication(medicationId)),
    updateCartMed: (cart, cartId) => dispatch(updateCartMed(cart, cartId)),
    createCartMed: (cartMed) => dispatch(createCartMed(cartMed))
  }
}

export default connect(mSTP, mDTP)(MedicationShow);