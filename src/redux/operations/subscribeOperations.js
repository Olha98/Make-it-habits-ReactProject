import axios from 'axios';
import subscribeActions from '../actions/subscribeActions';
import actionsLoader from '../actions/spinnerActions';
import { token } from './authOperation';

const changeType = typeSubscription => async (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);

  dispatch(actionsLoader.loaderOn());
  dispatch(subscribeActions.changeTypeRequest());
  try {
    await axios.patch('/users', typeSubscription);
    dispatch(subscribeActions.changeTypeSuccess(typeSubscription));
  } catch (error) {
    dispatch(subscribeActions.changeTypeError(error));
  }
  dispatch(actionsLoader.loaderOff());
};

const addCard = card => async (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);

  dispatch(actionsLoader.loaderOn());
  dispatch(subscribeActions.addCardRequest());
  try {
    await axios.post('/cards', card);
    dispatch(subscribeActions.addCardSuccess(card));
  } catch (error) {
    dispatch(subscribeActions.addCardError(error));
  }
  dispatch(actionsLoader.loaderOff());
};

export default { changeType, addCard };
