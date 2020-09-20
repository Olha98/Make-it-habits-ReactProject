import { GET_CIGARETTES } from '../constants/cigarettesInfoConstants';
import { GET_STATE_SUCCESS } from '../constants/stateConstants';

const initialState = {
  startedAt: '',
  data: [],
};

const cigarettesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CIGARETTES:
      return { ...action.payload };

    // case GET_STATE_SUCCESS:
    //   return { ...initialState, allHabits: [...action.payload] };

    default:
      return state;
  }
};
export default cigarettesReducer;
