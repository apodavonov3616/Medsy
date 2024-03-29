import { connect } from 'react-redux';
import Cart from './cart_meds';
import { destroyCartMed, fetchCartMeds, updateCartMed } from '../../actions/cart_meds_actions';
import { fetchMedications, fetchMedication } from '../../actions/medication_actions'

const mSTP = (state, ownProps) => {
    return {
        cartMeds: Object.values(state.entities.cartMeds),
        currentUser: state.entities.users[state.session.id],
        cartMedId: Object.keys(state.entities.cartMeds)
    };
};

const mDTP = dispatch => {
    return {
        fetchCartMeds: () => dispatch(fetchCartMeds()),
        fetchCartMed: (cartMedId) => dispatch(fetchCartMed(cartMedId)),
        updateCartMed: (cartMed) => dispatch(updateCartMed(cartMed)),
        destroyCartMed: (cartMedId) => dispatch(destroyCartMed(cartMedId))
    }
};

export default connect(mSTP, mDTP)(Cart);