import axios from 'axios';
import authAction from '../actions/authAction';
// import { actionsGetUserData } from '../actions/dataUser';
import { getHabits } from '../actions/habitsActions';
import { getUserData } from '../actions/userActions';
import { getCigarettes } from '../actions/cigarettesActions';


axios.defaults.baseURL = 'https://make-it-habit-api.herokuapp.com';

export const token = {
  set(token) {
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
      dispatch(authAction.loginSuccess(res.data));

      
      axios.get('/habits').then(res => {
        console.log(res.data, "REEEEEEEEEEEES");
      
        dispatch(getUserData({...res.data.user}));
        dispatch(getHabits([...res.data.habits]));
        dispatch(getCigarettes([...res.data.user.cigarettes]))
        // dailyResultAction
        // dispatch()
        // dispatch()
        // dispatch()
      });



    })
    .catch((err) => {
      dispatch(authAction.loginError(err));
    });
};


export default { token, userRegistration, userLogin };
