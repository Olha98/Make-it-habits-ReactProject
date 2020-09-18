import { combineReducers } from 'redux';
import subscribeConstants from '../constants/subscribeConstants';

const typeSubscription = (state = 'none', action) => {
  switch (action.type) {
    case subscribeConstants.CHANGE_TYPE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const addCard = (state = [], action) => {
  switch (action.type) {
    case subscribeConstants.ADD_CARD_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case subscribeConstants.CHANGE_TYPE_ERROR:
    case subscribeConstants.ADD_CARD_ERROR:
      return action.payload;
    case subscribeConstants.CHANGE_TYPE_REQUEST:
    case subscribeConstants.ADD_CARD_REQUEST:
      return null;
    default:
      return state;
  }
};

export default { typeSubscription, addCard, error };
