import axios from "axios";
import authAction from "../actions/authAction";
import { actionsGetUserData } from "../actions/dataUser";
import userActions from "../actions/actionsProfile";

axios.defaults.baseURL = "https://make-it-habit-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = token;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const userRegistration = (credentials) => (dispatch) => {
  dispatch(authAction.registrationRequest());
  axios
    .post("/auth/registration", credentials)
    .then((res) => {
      token.set(res.data.access_token);
      dispatch(authAction.registrationSuccess(res.data));
    })
    .catch((err) => {
      dispatch(authAction.registrationError(err));
    });
};

const userLogin = (credentials) => (dispatch) => {
  dispatch(authAction.loginRequest());
  axios
    .post("/auth/login", credentials)
    .then((res) => {
      token.set(res.data.access_token);

      axios.get("/habits").then(
        (res) => {
          dispatch(actionsGetUserData(res.data))
        }
      );
      dispatch(authAction.loginSucces(res.data));
    })
    .catch((err) => {
      dispatch(authAction.loginError(err));
    });
};

const userLogOut = () => (dispatch) => {
  dispatch(authAction.logOutRequest());
  axios
    .post("/users/logout")
    .then(() => {
      token.unSet();
      dispatch(authAction.logOutSuccess());
    })
    .catch((err) => {
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
