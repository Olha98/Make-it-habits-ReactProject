import axios from 'axios';
import { cardsActions, spinnerActions } from '../actions';
import { authSelector } from '../selectors';
import { token } from './authOperation';

const addCard = card => async (dispatch, getState) => {
  const tokenNow = authSelector.isAuthenticated(getState());
  token.set(tokenNow);

  dispatch(spinnerActions.loaderOn());
  dispatch(cardsActions.addCardRequest());
  try {
    await axios.post('/users/addPayment', card);
    dispatch(cardsActions.addCardSuccess(card));
  } catch (error) {
    dispatch(cardsActions.addCardError(error));
  } finally {
    dispatch(spinnerActions.loaderOff());
  }
};

const removeCard = id => async (dispatch, getState) => {
  const tokenNow = authSelector.isAuthenticated(getState());
  token.set(tokenNow);

  dispatch(spinnerActions.loaderOn());
  dispatch(cardsActions.removeCardRequest());
  try {
    dispatch(cardsActions.removeCardSuccess(id));
  } catch (error) {
    dispatch(cardsActions.removeCardError(error));
  } finally {
    dispatch(spinnerActions.loaderOff());
  }
};

const addPayment = payment => (dispatch, getState) => {
  const tokenNow = authSelector.isAuthenticated(getState());
  token.set(tokenNow);

  dispatch(spinnerActions.loaderOn());
  dispatch(cardsActions.addPaymentRequest());
  try {
    dispatch(cardsActions.addPaymentSuccess(payment));
  } catch (error) {
    dispatch(cardsActions.addPaymentError(error));
  } finally {
    dispatch(spinnerActions.loaderOff());
  }
};

export default { addCard, removeCard, addPayment };
