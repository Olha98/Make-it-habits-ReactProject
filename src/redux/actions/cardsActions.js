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

const getCardRequest = () => ({
  type: cardsConstants.GET_CARD_REQUEST,
});

const getCardSuccess = id => ({
  type: cardsConstants.GET_CARD_SUCCESS,
  payload: id,
});

const getCardError = error => ({
  type: cardsConstants.GET_CARD_ERROR,
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

const liftUpCardRequest = () => ({
  type: cardsConstants.LIFT_CARD_REQUEST,
});

const liftUpCardSuccess = id => ({
  type: cardsConstants.LIFT_CARD_SUCCESS,
  payload: id,
});

const liftUpCardError = error => ({
  type: cardsConstants.LIFT_CARD_ERROR,
  payload: error,
});

const addPaymentRequest = () => ({
  type: cardsConstants.ADD_PAYMENT_REQUEST,
});

const addPaymentSuccess = card => ({
  type: cardsConstants.ADD_PAYMENT_SUCCESS,
  payload: card,
});

const addPaymentError = error => ({
  type: cardsConstants.ADD_PAYMENT_ERROR,
  payload: error,
});

export default {
  addCardRequest,
  addCardSuccess,
  addCardError,
  getCardRequest,
  getCardSuccess,
  getCardError,
  removeCardRequest,
  removeCardSuccess,
  removeCardError,
  liftUpCardRequest,
  liftUpCardSuccess,
  liftUpCardError,
  addPaymentRequest,
  addPaymentSuccess,
  addPaymentError,
};
