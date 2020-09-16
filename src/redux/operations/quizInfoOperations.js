import axios from 'axios';
import quizInfoActions from '../actions/quizInfoActions';
import actionsLoader from '../actions/spinnerActions';

axios.defaults.baseURL = 'https://make-it-habit-api.herokuapp.com';

const addInfo = info => async (dispatch, getState) => {
  dispatch(actionsLoader.loaderOn());
  dispatch(quizInfoActions.addInfoRequest());
  try {
    const { data } = await axios.post('/users/updateQuizInfo', info);
    // console.log(data);
    dispatch(quizInfoActions.addInfoSuccess(data));
  } catch (error) {
    // console.log(error);
    dispatch(quizInfoActions.addInfoError(error));
  }
  dispatch(actionsLoader.loaderOff());
};

const fetchInfo = () => async (dispatch, getState) => {
  dispatch(actionsLoader.loaderOn());
  dispatch(quizInfoActions.getInfoRequest());
  try {
    const { data } = await axios.get('/habits');
    const { user } = data;
    // console.log(user.quizInfo);
    dispatch(quizInfoActions.getInfoSuccess(user.quizInfo));
  } catch (error) {
    // console.log(error);
    dispatch(quizInfoActions.getInfoError(error));
  }
  dispatch(actionsLoader.loaderOff());
};

export default { addInfo, fetchInfo };
