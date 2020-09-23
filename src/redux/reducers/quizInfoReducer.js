// import { combineReducers } from 'redux';
import quizInfoConstants from '../constants/quizInfoConstants';

const initialState = {
  smokeYears: 0,
  cigarettePerDay: 0,
  cigarettePerTime: 0,
  cigarettePackPrice: 0,
};

const quizInfo = (state = { ...initialState }, action) => {
  switch (action.type) {
    case quizInfoConstants.ADD_SUCCESS:
    case quizInfoConstants.GET_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

// const error = (state = '', action) => {
//   switch (action.type) {
//     case quizInfoConstants.ADD_ERROR:
//     case quizInfoConstants.GET_ERROR:
//       return action.payload.message;
//     case quizInfoConstants.ADD_REQUEST:
//     case quizInfoConstants.GET_REQUEST:
//       return '';
//     default:
//       return state;
//   }
// };

// export default { quizInfo, error };
export default quizInfo;
