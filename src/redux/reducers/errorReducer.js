import { quizInfoConstants, subscrConstants } from '../constants';

const error = (state = '', action) => {
  switch (action.type) {
    case quizInfoConstants.ADD_ERROR:
    case quizInfoConstants.GET_ERROR:
    case subscrConstants.CHANGE_TYPE_ERROR:
    case subscrConstants.ADD_CARD_ERROR:
      return action.payload.message;
    case quizInfoConstants.ADD_REQUEST:
    case quizInfoConstants.GET_REQUEST:
    case subscrConstants.CHANGE_TYPE_REQUEST:
    case subscrConstants.ADD_CARD_REQUEST:
      return '';
    default:
      return state;
  }
};

export default error;
