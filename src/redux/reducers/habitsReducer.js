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
      return { ...initialState, allHabits: [...action.payload] };

    case GET_STATE_SUCCESS:
      return { ...initialState, allHabits: [...action.payload.habits] };

    case GET_CURRENT_HABITS:
      return { ...initialState, currentHabits: [...action.payload.habits] };

    default:
      return state;
  }
};
export default habitsReducer;
