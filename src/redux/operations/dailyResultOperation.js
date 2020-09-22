import axios from 'axios';
import { getCigarettes } from '../actions/cigarettesActions';
import dailyResultAction from '../actions/dailyResultAction';
import { token } from './authOperation';


const updateDailyResul = update => (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);

  dispatch(dailyResultAction.updateCiggaretsRequest());

  axios
    .post('/users/updateCigarettes', update)
    .then(res => {
      dispatch(getCigarettes({ ...res.data }));
    })
    .catch(err => {
      dispatch(dailyResultAction.updateCiggaretsError(err));
    });
};

export default updateDailyResul;
