import { connect } from "react-redux";
import { fetchMedications } from "../../actions/medication_actions";
import CategoriesShow from "./categories_show";


const mSTP = (state, ownProps) => {
    return {
        medications: Object.values(state.entities.medications),
        category: ownProps.match.params.category.toLowerCase()
    }
};

const mDTP = dispatch => {
    return {
        fetchMedications: () => dispatch(fetchMedications())
    }
};

export default connect(mSTP, mDTP)(CategoriesShow);