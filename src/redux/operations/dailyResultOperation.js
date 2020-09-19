import axios from 'axios';
import { getCigarettes } from '../actions/cigarettesActions';
import dailyResultAction from '../actions/dailyResultAction';
// import { actionsGetUserData } from '../actions/dataUser';
import { getUserData } from '../actions/userActions';
import { token } from './authOperation';

// axios.defaults.baseURL = 'https://make-it-habit-api.herokuapp.com';

const updateDailyResul = update => (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  console.log(tokenNow, 'tokenNow');
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
