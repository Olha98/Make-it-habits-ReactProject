import axios from 'axios';
import { actionsGetUserData } from '../actions/dataUser';
import subscribeActions from '../actions/subscribeActions';
import actionsLoader from '../actions/spinnerActions';
import { token } from './authOperation';

const changeType = typeSuscription => async (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);

  dispatch(actionsLoader.loaderOn());
  dispatch(subscribeActions.changeTypeRequest());
  try {
    await axios.patch('/users', typeSuscription);

    axios.get('/habits').then(res => {
      dispatch(
        actionsGetUserData({ ...res.data.user, habits: res.data.habits }),
      );
    });
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

    axios.get('/habits').then(res => {
      dispatch(
        actionsGetUserData({ ...res.data.user, habits: res.data.habits }),
      );
    });
  } catch (error) {
    dispatch(subscribeActions.addCardError(error));
  }
  dispatch(actionsLoader.loaderOff());
};

export default { changeType, addCard };
