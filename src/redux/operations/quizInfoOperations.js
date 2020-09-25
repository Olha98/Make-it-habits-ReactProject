import axios from 'axios';
import { quizInfoActions, spinnerActions } from '../actions';
import { token } from './authOperation';

const addInfo = info => async (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);

  dispatch(spinnerActions.loaderOn());
  dispatch(quizInfoActions.addInfoRequest());
  try {
    await axios.post('/users/updateQuizInfo', info);
    dispatch(quizInfoActions.addInfoSuccess(info));
  } catch (error) {
    dispatch(quizInfoActions.addInfoError(error));
  } finally {
    dispatch(spinnerActions.loaderOff());
  }
};

export default { addInfo };
