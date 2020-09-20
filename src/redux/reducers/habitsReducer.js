import { GET_HABITS } from '../constants/habitsConstants';
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
      // case GET_STATE_SUCCESS:
      return { ...initialState, allHabits: [...action.payload] };

    case GET_STATE_SUCCESS:
      return { ...initialState, allHabits: [...action.payload.habits] };

    case checkListConstants.ADD_HABIT_STATUS_SUCCESS:
      return { ...initialState, allHabits: [...action.payload] };

    default:
      return state;
  }
};
export default habitsReducer;
