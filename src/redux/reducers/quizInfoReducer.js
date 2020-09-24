import { quizInfoConstants } from '../constants';

const initialState = {
  smokeYears: 0,
  cigarettePerDay: 0,
  cigarettePerTime: 0,
  cigarettePackPrice: 0,
};

const quizInfo = (state = { ...initialState }, action) => {
  switch (action.type) {
    case quizInfoConstants.ADD_INFO_SUCCESS:
    case quizInfoConstants.GET_INFO_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

export default quizInfo;
