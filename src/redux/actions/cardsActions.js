import { cardsConstants } from '../constants';

const addCardRequest = () => ({
  type: cardsConstants.ADD_CARD_REQUEST,
});

const addCardSuccess = card => ({
  type: cardsConstants.ADD_CARD_SUCCESS,
  payload: card,
});

const addCardError = error => ({
  type: cardsConstants.ADD_CARD_ERROR,
  payload: error,
});

const removeCardRequest = () => ({
  type: cardsConstants.REMOVE_CARD_REQUEST,
});

const removeCardSuccess = id => ({
  type: cardsConstants.REMOVE_CARD_SUCCESS,
  payload: id,
});

const removeCardError = error => ({
  type: cardsConstants.REMOVE_CARD_ERROR,
  payload: error,
});

export default {
  addCardRequest,
  addCardSuccess,
  addCardError,
  removeCardRequest,
  removeCardSuccess,
  removeCardError,
};
