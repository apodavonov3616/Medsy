import { combineReducers } from 'redux';
import medicationsReducer from './medications_reducer';
import usersReducer from './users_reducer';
import cartMedReducer from "./cart_reducer"


const entitiesReducer = combineReducers({
  users: usersReducer,
  medications: medicationsReducer,
  carts: cartMedReducer
});

export default entitiesReducer;