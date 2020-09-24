import {
  quizInfoConstants,
  subscrConstants,
  cardsConstants,
  errorConstants,
} from '../constants';

const error = (state = '', action) => {
  switch (action.type) {
    case errorConstants.SET_ERROR:
    case quizInfoConstants.ADD_INFO_ERROR:
    case quizInfoConstants.GET_INFO_ERROR:
    case subscrConstants.CHANGE_TYPE_ERROR:
    case cardsConstants.ADD_CARD_ERROR:
      return action.payload.message;

    case errorConstants.HIDE_ERROR:
    case quizInfoConstants.ADD_INFO_REQUEST:
    case quizInfoConstants.GET_INFO_REQUEST:
    case subscrConstants.CHANGE_TYPE_REQUEST:
    case cardsConstants.ADD_CARD_REQUEST:
      return '';

    default:
      return state;
  }
};

export default error;
