import Axios from "axios";
import authAction from "../actions/authAction";

Axios.defaults.baseURL = "";

const token = {
  set(token) {
    Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    Axios.defaults.headers.common.Authorization = ``;
  },
};

const userRegistration = (credentials) => (dispatch) => {
  dispatch(authAction.registrationRequest());
  Axios.post("", credentials)
    .then((res) => {
      token.set(res.data.token);
      dispatch(authAction.registrationSuccess(res.data));
    })
    .catch((err) => {
      dispatch(authAction.registrationError(err));
    });
};

const userLogin = (credentials) => (dispatch) => {
  dispatch(authAction.loginRequest());
  Axios.post("", credentials)
    .then((res) => {
      token.set(res.data.token);
      dispatch(authAction.loginSuccess(res.data));
    })
    .catch((err) => {
      dispatch(authAction.loginError(err));
    });
};

// const userLogOut = () => (dispatch) => {
//   dispatch(authAction.logOutRequest());
//   axios
//     .post("/users/logout")
//     .then(() => {
//       token.unSet();
//       dispatch(authAction.logOutSuccess());
//     })
//     .catch((err) => {
//       dispatch(authAction.logOutError(err));
//     });
// };

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

export default { userRegistration, userLogin };
