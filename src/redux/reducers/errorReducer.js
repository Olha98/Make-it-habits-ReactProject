// import * as stateConstants from '../constants/stateConstants';
import {
  GET_STATE_REQUEST,
  GET_STATE_ERROR,
} from '../constants/stateConstants';
import {
  authConstants,
  profileConstants,
  customHabitsConstants,
  checkListConstants,
  dailyResultConstants,
  quizInfoConstants,
  subscrConstants,
  cardsConstants,
  errorConstants,
} from '../constants';

const initialResponse = {
  data: '',
  status: 0,
  statusText: '',
};

const error = (state = null, action) => {
  switch (action.type) {
    case errorConstants.SET_ERROR:
    case authConstants.REGISTER_ERROR:
    case authConstants.LOGIN_ERROR:
    case profileConstants.ADD_DATA_USER_ERROR:
    case profileConstants.POST_PASSWORD_ERROR:
    case customHabitsConstants.ADD_CUSTOM_HABIT_ERROR:
    case customHabitsConstants.PATCH_CUSTOM_HABIT_ERROR:
    case customHabitsConstants.REMOVE_CUSTOM_HABIT_ERROR:
    case checkListConstants.ADD_HABIT_STATUS_ERROR:
    case dailyResultConstants.UPDATE_CIGGARETES_ERROR:
    case quizInfoConstants.ADD_INFO_ERROR:
    case subscrConstants.CHANGE_TYPE_ERROR:
    case cardsConstants.ADD_CARD_ERROR:
    case cardsConstants.ADD_PAYMENT_ERROR:
    case GET_STATE_ERROR:
      const response = action.payload.response
        ? {
            data: action.payload.response.data,
            status: action.payload.response.status,
            statusText: action.payload.response.statusText,
          }
        : initialResponse;
      return {
        ...response,
        message: action.payload.message,
      };

    case errorConstants.HIDE_ERROR:
    case authConstants.REGISTER_REQUEST:
    case authConstants.LOGIN_REQUEST:
    case profileConstants.ADD_DATA_USER_REQUEST:
    case profileConstants.POST_PASSWORD_REQUEST:
    case customHabitsConstants.ADD_CUSTOM_HABIT_REQUEST:
    case customHabitsConstants.PATCH_CUSTOM_HABIT_REQUEST:
    case customHabitsConstants.REMOVE_CUSTOM_HABIT_REQUEST:
    case checkListConstants.ADD_HABIT_STATUS_REQUEST:
    case dailyResultConstants.UPDATE_CIGGARETES_REQUEST:
    case quizInfoConstants.ADD_INFO_REQUEST:
    case subscrConstants.CHANGE_TYPE_REQUEST:
    case cardsConstants.ADD_CARD_REQUEST:
    case cardsConstants.ADD_PAYMENT_REQUEST:
    case GET_STATE_REQUEST:
      return null;

    default:
      return state;
  }
};

export default error;
