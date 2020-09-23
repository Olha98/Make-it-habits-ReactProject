import axios from 'axios';
import { subscrActions, spinnerActions } from '../actions';
import { token } from './authOperation';

const changeType = typeSubscription => async (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);
  let data;
  dispatch(spinnerActions.loaderOn());
  dispatch(subscrActions.changeTypeRequest());
  try {
    data = await axios.post('/users', typeSubscription);
    dispatch(subscrActions.changeTypeSuccess(typeSubscription));
  } catch (error) {
    dispatch(subscrActions.changeTypeError(error));
    // console.dir(error);
    data = error.response;
    // throw error;
  } finally {
    dispatch(spinnerActions.loaderOff());
  }
  return data;
};

export default { changeType };
