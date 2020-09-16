import axios from 'axios';
import quizInfoActions from '../actions/quizInfoActions';

axios.defaults.baseURL = 'https://make-it-habit-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = token;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const addInfo = info => async (dispatch, getState) => {
  const {
    auth: { access_token: persistedToken },
  } = getState();
  console.log(persistedToken);
  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(quizInfoActions.addInfoRequest());
  try {
    const { data } = await axios.post('/users/updateQuizInfo', info);
    console.log(data);
    dispatch(quizInfoActions.addInfoSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(quizInfoActions.addInfoError(error));
  }
};

const fetchInfo = () => async (dispatch, getState) => {
  const {
    auth: { access_token: persistedToken },
  } = getState();
  console.log(persistedToken);
  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(quizInfoActions.getInfoRequest());
  try {
    const { data } = await axios.get('/habits');
    const { user } = data;
    console.log(user.quizInfo);
    dispatch(quizInfoActions.getInfoSuccess(user.quizInfo));
  } catch (error) {
    console.log(error);
    dispatch(quizInfoActions.getInfoError(error));
  }
};

export default { addInfo, fetchInfo };
