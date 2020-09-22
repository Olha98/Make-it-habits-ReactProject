import axios from 'axios';
import subscribeActions from '../actions/subscribeActions';
import actionsLoader from '../actions/spinnerActions';
import { token } from './authOperation';

const changeType = typeSubscription => async (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);
  let data;
  dispatch(actionsLoader.loaderOn());
  dispatch(subscribeActions.changeTypeRequest());
  try {
    data = await axios.post('/users', typeSubscription);
    dispatch(subscribeActions.changeTypeSuccess(typeSubscription));
  } catch (error) {
    dispatch(subscribeActions.changeTypeError(error));
    // console.dir(error);
    data = error.response;
    // throw error;
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
  return data;
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
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

export default { changeType, addCard };
