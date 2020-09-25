import { GET_CIGARETTES } from '../constants/cigarettesInfoConstants';
import constants from '../constants/authConstans';

const initialState = {
  startedAt: '',
  data: [],
};

const cigarettesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CIGARETTES:
      return { ...action.payload };
    case constants.LOGOUT:
      return initialState;

    default:
      return state;
  }
};
export default cigarettesReducer;
