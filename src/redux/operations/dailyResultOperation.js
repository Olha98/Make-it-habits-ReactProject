import axios from 'axios';
import { connect } from 'react-redux';
import dailyResultAction from '../actions/dailyResultAction';
import { token } from './leftSideBarOperations';
axios.defaults.baseURL = 'https://make-it-habit-api.herokuapp.com';

const updateDailyResul = update => dispatch => {
  dispatch(dailyResultAction.updateCiggaretsRequest());
  // axios.defaults.headers.common.Authorization = token;
  axios
    .post('/users/updateCigarettes', update)
    .then(res => {
      console.log('dailyResult', res);
      dispatch(dailyResultAction.updateCiggaretsSuccess(update));
    })
    .catch(err => {
      dispatch(dailyResultAction.updateCiggaretsError(err));
    });
};

export default updateDailyResul;
