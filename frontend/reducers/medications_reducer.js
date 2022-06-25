import {
  RECEIVE_ALL_MEDICATIONS,
  RECEIVE_MEDICATION,
} from "../actions/medication_actions";

const medicationsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_MEDICATIONS:
      return action.medications;
    case RECEIVE_MEDICATION:
      nextState[action.medication.id] = action.medication;
      return nextState;
    default:
      return state;
  }
};

export default medicationsReducer;
