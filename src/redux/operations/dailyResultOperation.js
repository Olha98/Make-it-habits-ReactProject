import axios from 'axios';
import dailyResultAction from '../actions/dailyResultAction';
import { actionsGetUserData } from '../actions/dataUser';
import { token } from './authOperation';

// axios.defaults.baseURL = 'https://make-it-habit-api.herokuapp.com';

const updateDailyResul = update => (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  console.log(tokenNow, 'tokenNow');
  token.set(tokenNow);

  dispatch(dailyResultAction.updateCiggaretsRequest());
  // axios.defaults.headers.common.Authorization = token;
  axios
    .post('/users/updateCigarettes', update)
    .then(res => {
      console.log('dailyResul234567894567t', res);

      dispatch(dailyResultAction.updateCiggaretsSuccess(res.data));

      axios.get('/habits').then(res => {
        console.log(res, 'updateDailyResul876545544');
        dispatch(
          actionsGetUserData({ ...res.data.user, habits: res.data.habits }),
        );
      });
    })
    .catch(err => {
      dispatch(dailyResultAction.updateCiggaretsError(err));
    });
};

export default updateDailyResul;
