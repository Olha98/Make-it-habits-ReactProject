import { GET_HABITS, GET_CURRENT_HABITS } from '../constants/habitsConstants';
import { GET_STATE_SUCCESS } from '../constants/stateConstants';
import { customHabitsConstants, checkListConstants } from '../constants';

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

    case customHabitsConstants.ADD_CUSTOM_HABIT:
      return { ...state, allHabits: [...state.allHabits, action.payload] };

    case customHabitsConstants.REMOVE_CUSTOM_HABIT:
      return {
        ...state,
        allHabits: state.allHabits.filter(
          habit => habit._id !== action.payload,
        ),
      };

    case customHabitsConstants.PATCH_CUSTOM_HABIT:
    case checkListConstants.ADD_HABIT_STATUS_SUCCESS:
      return {
        ...state,
        allHabits: state.allHabits.map(habit =>
          habit._id === action.payload._id
            ? { ...habit, ...action.payload }
            : habit,
        ),
      };

    default:
      return state;
  }
};
export default habitsReducer;
