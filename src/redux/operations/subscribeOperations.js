import axios from 'axios';
import { subscrActions, spinnerActions } from '../actions';
import { getUserData } from '../actions/userActions';
import { authSelector } from '../selectors';
import { token } from './authOperation';

const changeType = request => async (dispatch, getState) => {
  const tokenNow = authSelector.isAuthenticated(getState());
  token.set(tokenNow);
  let data;
  dispatch(spinnerActions.loaderOn());
  dispatch(subscrActions.changeTypeRequest());
  try {
    data = await axios.post('/users/updateSubscription', request);
    dispatch(
      getUserData({
        ...getState().user,
        subscription: request.plan,
      }),
    );
    dispatch(subscrActions.changeTypeSuccess(request));
  } catch (error) {
    dispatch(subscrActions.changeTypeError(error));
    data = error.response;
  } finally {
    dispatch(spinnerActions.loaderOff());
  }
  return data;
};

export default { changeType };
