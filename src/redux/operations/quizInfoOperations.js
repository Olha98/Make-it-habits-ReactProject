import axios from 'axios';
import quizInfoActions from '../actions/quizInfoActions';
import actionsLoader from '../actions/spinnerActions';

axios.defaults.baseURL = 'https://make-it-habit-api.herokuapp.com';

const addInfo = info => async dispatch => {
  dispatch(actionsLoader.loaderOn());
  dispatch(quizInfoActions.addInfoRequest());
  try {
    const { data } = await axios.post('/users/updateQuizInfo', info);
    dispatch(quizInfoActions.addInfoSuccess(data));
  } catch (error) {
    dispatch(quizInfoActions.addInfoError(error));
  }
  dispatch(actionsLoader.loaderOff());
};

export default { addInfo };
