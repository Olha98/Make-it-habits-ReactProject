import axios from 'axios';
import actionsProfile from '../actions/actionsProfile';
import actionsUser from '../actions/actionsProfile';
import actionsLoader from '../actions/spinnerActions';
import { getUserData } from '../actions/userActions';
import { cardsSelectors } from '../selectors';

const addDataUserOperation = user => async (dispatch, getState) => {
  const cards = cardsSelectors.getCards(getState());
  dispatch(actionsLoader.loaderOn());
  dispatch(actionsUser.addDataUserRequest());
  try {
    const { data } = await axios.patch('/users', user);
    dispatch(getUserData({ ...data, cards }));
  } catch (error) {
    dispatch(actionsUser.addDataUserError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

const postPasswordOperation = password => async dispatch => {
  dispatch(actionsLoader.loaderOn());
  dispatch(actionsProfile.postPasswordRequest());
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
