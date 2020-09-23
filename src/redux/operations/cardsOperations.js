import axios from 'axios';
import { cardsActions, spinnerActions } from '../actions';
import { getUserData } from '../actions/userActions';
import { token } from './authOperation';

const addCard = card => async (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);

  dispatch(spinnerActions.loaderOn());
  dispatch(cardsActions.addCardRequest());
  try {
    await axios.post('/users/addPayment', card);
    const cards = [...getState().user.cards, card];
    dispatch(
      getUserData({
        ...getState().user,
        payments: cards,
      }),
    );
    // dispatch(cardsActions.addCardSuccess(card));
  } catch (error) {
    dispatch(cardsActions.addCardError(error));
  } finally {
    dispatch(spinnerActions.loaderOff());
  }
};

const removeCard = id => async (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);

  dispatch(spinnerActions.loaderOn());
  dispatch(cardsActions.removeCardRequest());
  try {
    await axios.post('/users/addPayment', id);
    dispatch(cardsActions.removeCardSuccess(id));
  } catch (error) {
    dispatch(cardsActions.removeCardError(error));
  } finally {
    dispatch(spinnerActions.loaderOff());
  }
};

export default { addCard, removeCard };
