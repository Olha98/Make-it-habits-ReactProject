import { GET_HABITS, GET_CURRENT_HABITS } from '../constants/habitsConstants';
import { GET_STATE_SUCCESS } from '../constants/stateConstants';
import checkListConstants from '../constants/checkListConstants';

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

    case checkListConstants.ADD_HABIT_STATUS_SUCCESS:
      return { ...initialState, allHabits: [...action.payload] };

    default:
      return state;
  }
};
export default habitsReducer;
