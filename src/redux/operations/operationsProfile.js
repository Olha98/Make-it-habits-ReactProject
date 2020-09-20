import axios from 'axios';
import actionsProfile from '../actions/actionsProfile';
import actionsUser from '../actions/actionsProfile';
import actionsLoader from '../actions/spinnerActions';
import { token } from './authOperation';
import { getUserData } from '../actions/userActions';

const addDataUserOperation = user => async (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);

  dispatch(actionsLoader.loaderOn());
  try {
    const data = await axios.patch('/users', user);
    // console.log('data-Add', data.status);
    // console.log('data-Add', data.data);
    dispatch(
      getUserData({
        ...data.data,
        ...data.status,
      }),
    );
  } catch (error) {
    // console.log('error-add', error);
    dispatch(actionsUser.addDataUserError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

const postPasswordOperation = password => async (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);

  dispatch(actionsLoader.loaderOn());
  try {
    await axios.post('/auth/updatePassword', password);
    // console.log('dataPassWord', data);
    dispatch(actionsUser.postPasswordSuccess({ ...password }));
  } catch (error) {
    dispatch(actionsProfile.postPasswordError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

export default { addDataUserOperation, postPasswordOperation };
