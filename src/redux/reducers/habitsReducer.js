import { GET_HABITS, GET_CURRENT_HABITS } from '../constants/habitsConstants';
import { GET_STATE_SUCCESS } from '../constants/stateConstants';
import castomHabitConstans from '../constants/castomHabitConstans';
import notifyConstants from '../constants/notifyConstants';

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

    case castomHabitConstans.ADD_CUSTOM_HABIT:
      return { ...state, allHabits: [...state.allHabits, action.payload] };

    case castomHabitConstans.REMOVE_CUSTOM_HABIT:
      return {
        ...state,
        allHabits: state.allHabits.filter(
          habit => habit._id !== action.payload,
        ),
      };

    case castomHabitConstans.PATCH_CUSTOM_HABIT:
      return {
        ...state,
        allHabits: state.allHabits.map(habit =>
          habit._id === action.payload._id ? action.payload : habit,
        ),
      };
    // =============================
    case notifyConstants.NOTIFY_ADD:
      return {
        ...state,
        doneHabits: action.payload,
      };

    case notifyConstants.NOTIFY_CLEAR:
      return {
        ...state,
        doneHabits: [],
      };

    case notifyConstants.NOTIFY_ONE_HABIT:
      return {
        ...state,
        doneHabits: [...state.doneHabits, action.payload],
      };

    // =============================

    default:
      return state;
  }
};
export default habitsReducer;
