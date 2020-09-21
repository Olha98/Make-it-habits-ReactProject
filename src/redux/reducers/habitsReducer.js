import { GET_HABITS, GET_CURRENT_HABITS } from '../constants/habitsConstants';
import { GET_STATE_SUCCESS } from '../constants/stateConstants';

const initialState = {
  allHabits: [],
  currentHabits: [],
  doneHabits: [],
};

const habitsReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case GET_HABITS:
      return { ...state, allHabits: action.payload };

    case GET_STATE_SUCCESS:
      return { ...state, allHabits: action.payload.habits };

    case GET_CURRENT_HABITS:
      return { ...state, currentHabits: action.payload };

    //  case GET_DONE_HABITS:
    //  return { ...state, doneHabits: action.payload };

    default:
      return state;
  }
};
export default habitsReducer;
