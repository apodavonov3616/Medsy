import { combineReducers } from 'redux';
import medicationsReducer from './medications_reducer';
import usersReducer from './users_reducer';
import cartMedsReducer from "./cart_meds_reducer"
import reviewsReducer from './reviews_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  medications: medicationsReducer,
  cartMeds: cartMedsReducer,
  reviews: reviewsReducer
});

export default entitiesReducer;