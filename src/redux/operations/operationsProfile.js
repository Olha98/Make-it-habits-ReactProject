import axios from 'axios';
import actionsProfile from '../actions/actionsProfile';
import actionsUser from '../actions/actionsProfile';
import actionsLoader from '../actions/spinnerActions';
import { getUserData } from '../actions/userActions';

const addDataUserOperation = user => async dispatch => {

  dispatch(actionsLoader.loaderOn());
  try {
    const { data } = await axios.patch('/users', user);
    dispatch(
      getUserData({
        ...data,
      }),
    );
  } catch (error) {
    dispatch(actionsUser.addDataUserError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

const postPasswordOperation = password => async dispatch => {
  // const tokenNow = getState().auth.access_token;
  // token.set(tokenNow);
  dispatch(actionsLoader.loaderOn());
  try {
    await axios.post('/auth/updatePassword', password);
    dispatch(actionsUser.postPasswordSuccess({ ...password }));
  } catch (error) {
    dispatch(actionsProfile.postPasswordError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

export default { addDataUserOperation, postPasswordOperation };
