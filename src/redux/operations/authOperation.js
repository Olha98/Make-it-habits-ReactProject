import axios from 'axios';
import authAction from '../actions/authAction';
import dataUser, { actionsGetUserData } from '../actions/dataUser';
import userActions from '../actions/actionsProfile';

axios.defaults.baseURL = 'https://make-it-habit-api.herokuapp.com';

export const token = {
  set(token) {
    console.log(token, 'token!!!!!!!!!!!!!!!!!!!!!!!!!!');
    axios.defaults.headers.common.Authorization = token;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const userRegistration = credentials => dispatch => {
  dispatch(authAction.registrationRequest());
  axios
    .post('/auth/registration', credentials)
    .then(res => {
      token.set(res.data.access_token);
      dispatch(authAction.registrationSuccess(res.data));
    })
    .catch(err => {
      dispatch(authAction.registrationError(err));
    });
};

const userLogin = credentials => dispatch => {
  dispatch(authAction.loginRequest());
  axios
    .post('/auth/login', credentials)
    .then(res => {
      token.set(res.data.access_token);
      dispatch(authAction.loginSucces(res.data));

      axios.get('/habits').then(res => {
        console.log(res, "RESMOTHERFACKER")
        dispatch(
          actionsGetUserData({ ...res.data.user, habits: res.data.habits }),
        );
      });
    })
    .catch((err) => {
      dispatch(authAction.loginError(err));
    });
};

const userLogOut = () => dispatch => {
  dispatch(authAction.logOutRequest());
  axios
    .post('/users/logout')
    .then(() => {
      token.unSet();
      dispatch(authAction.logOutSuccess());
    })
    .catch(err => {
      dispatch(authAction.logOutError(err));
    });
};

export default { token, userRegistration, userLogin, userLogOut };
