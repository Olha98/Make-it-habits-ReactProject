// import { combineReducers } from 'redux';
import { cardsConstants } from '../constants';

const cardsReducer = (state = [], action) => {
  switch (action.type) {
    case cardsConstants.ADD_CARD_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default { cardsReducer };
