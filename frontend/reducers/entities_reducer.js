import { combineReducers } from 'redux';
import medicationsReducer from './medications_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  medications: medicationsReducer
});

export default entitiesReducer;