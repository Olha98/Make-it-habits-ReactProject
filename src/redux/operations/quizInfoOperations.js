import axios from 'axios';
import quizInfoActions from '../actions/quizInfoActions';
import actionsLoader from '../actions/spinnerActions';
import { token } from './authOperation';

const addInfo = info => async (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);

  dispatch(actionsLoader.loaderOn());
  dispatch(quizInfoActions.addInfoRequest());
  try {
    // const response = await axios.post('/users/updateQuizInfo', info);
    // console.log('response', response);
    await axios.post('/users/updateQuizInfo', info);
    dispatch(quizInfoActions.addInfoSuccess(info));
  } catch (error) {
    dispatch(quizInfoActions.addInfoError(error));
  }
  dispatch(actionsLoader.loaderOff());
};

export default { addInfo };
