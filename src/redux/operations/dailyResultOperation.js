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
  console.log('-------------------');
  console.dir(axios);
  // axios.defaults.headers.common.Authorization = token;
  axios
    .post('/users/updateCigarettes', update)
    .then(res => {
      console.log('dailyResul234567894567t', res);
      dispatch(getCigarettes(...res.data));
      
      axios.get('/habits').then(res => {
        dispatch(getUserData({ ...res.data.user }));
      });
    })
    .catch(err => {
      dispatch(dailyResultAction.updateCiggaretsError(err));
    });
};

export default updateDailyResul;
