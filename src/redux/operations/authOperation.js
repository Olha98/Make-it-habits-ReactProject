import axios from 'axios';
import authAction from '../actions/authAction';
import { actionsGetUserData } from '../actions/dataUser';
import userActions from '../actions/actionsProfile';

axios.defaults.baseURL = 'https://make-it-habit-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = token;
    console.log('token', token);
  },
  unSet() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const userRegistration = credentials => dispatch => {
  dispatch(authAction.registrationRequest());
  console.log(credentials);
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
  console.log(credentials);
  axios
    .post('/auth/login', credentials)
    .then(res => {
      console.log(res, 'loginlogin');
      token.set(res.data.access_token);

      axios.get('/habits').then(
        // (res) => console.log(res.data.user, "AAAAAAASSASSSASS")
        res => dispatch(userActions.getDataUserSuccess(res.data.user)),
      );

      // Axios.get("/users/updateQuizInfo").then((res) =>
      //   console.log(res, "updateQuizInfo!!!!!!!!!!!!")
      // );
      // Axios.get("/users/updateCigarettes").then((res) =>
      //   console.log(res, "updateCigarettes!!!!!!!!!!!!")
      // );

      dispatch(authAction.loginSucces(res.data));
      axios.get('/habits').then(
        // res=>console.log(res.data.user)
        res => dispatch(actionsGetUserData(res.data.user)),
      );
    })
    .catch(err => {
      console.log(err, 'error');
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

// const getCurrentUser = (credentials) => (dispatch, getState) => {
//   const {
//     auth: { token: getingtoken },
//   } = getState();
//   if (!getingtoken) {
//     return;
//   }
//   token.set(getingtoken);
//   dispatch(authAction.getCurrentUserRequest());
//   axios
//     .get("/users/current", credentials)
//     .then((res) => {
//       dispatch(authAction.getCurrentUserSuccess(res.data));
//     })
//     .catch((err) => {
//       dispatch(authAction.getCurrentUserError(err));
//     });
// };

export default { userRegistration, userLogin, userLogOut };
