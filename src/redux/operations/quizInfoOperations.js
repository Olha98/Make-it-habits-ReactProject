import axios from 'axios';
import { actionsGetUserData } from '../actions/dataUser';
import quizInfoActions from '../actions/quizInfoActions';
import actionsLoader from '../actions/spinnerActions';
import { token } from './authOperation';

// axios.defaults.baseURL = 'https://make-it-habit-api.herokuapp.com';

const addInfo = info => async (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);

  dispatch(actionsLoader.loaderOn());
  dispatch(quizInfoActions.addInfoRequest());
  try {
    const { data } = await axios.post('/users/updateQuizInfo', info);

    // dispatch(quizInfoActions.addInfoSuccess(data));

    axios.get('/habits').then(res => {
      dispatch(
        actionsGetUserData({ ...res.data.user, habits: res.data.habits }),
      );
    });
  } catch (error) {
    dispatch(quizInfoActions.addInfoError(error));
  }
  dispatch(actionsLoader.loaderOff());
};

export default { addInfo };
