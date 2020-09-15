import axios from "axios";
import authAction from "../actions/authAction";

axios.defaults.baseURL = "https://make-it-habit-api.herokuapp.com";
axios.defaults.headers.common.Authorization =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNWYzOTk2YzEyMDY3MDAxN2Q5NDA1OSIsImlhdCI6MTYwMDE3MjY5OCwiZXhwIjoxNjAwNzc3NDk4fQ.UPn2xO8bZHDzuYRNPsHp1XYV8VHzgbStNMPBmJruT-Y";
console.dir(axios);
const token = {
  set(token) {
    // Axios.defaults.headers.common.Authorization = token;
    // axios.defaults.headers.common.Authorization = token;
    console.log("imagine that ih set token", token);
  },
  unSet() {
    // axios.defaults.headers.common.Authorization = ``;
    console.log("unset");
  },
};

const userRegistration = (credentials) => (dispatch) => {
  dispatch(authAction.registrationRequest());
  console.log(credentials);
  axios
    .post("/auth/registration", credentials)
    .then((res) => {
      console.log(res, "registr");
      // token.set(res.data.token);
      dispatch(authAction.registrationSuccess(res.data));
    })
    .catch((err) => {
      dispatch(authAction.registrationError(err));
    });
};

const userLogin = (credentials) => (dispatch) => {
  dispatch(authAction.loginRequest());
  console.log(credentials);
  axios
    .post("/auth/login", credentials)
    .then((res) => {
      console.log(res, "loginlogin");
      token.set(res.data.token);
      dispatch(authAction.loginSucces(res.data));
    })
    .catch((err) => {
      console.log(err, "error");
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
