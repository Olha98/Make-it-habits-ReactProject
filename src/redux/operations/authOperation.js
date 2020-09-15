import Axios from "axios";
import authAction from "../actions/authAction";
import userActions from "../actions/actionsProfile";

Axios.defaults.baseURL = "https://make-it-habit-api.herokuapp.com";

const token = {
  set(token) {
    Axios.defaults.headers.common.Authorization = token;
  },
  unSet() {
    Axios.defaults.headers.common.Authorization = ``;
  },
};

const userRegistration = (credentials) => (dispatch) => {
  dispatch(authAction.registrationRequest());
  console.log(credentials);
  Axios.post("/auth/registration", credentials)
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
  console.log(credentials);
  Axios.post("/auth/login", credentials)
    .then((res) => {
      console.log(res, "loginlogin");
      token.set(res.data.access_token);

      Axios.get("/habits").then(
        // (res) => console.log(res.data.user, "AAAAAAASSASSSASS")
        (res) => dispatch(userActions.getDataUserSuccess(res.data.user))
      );

      // Axios.get("/users/updateQuizInfo").then((res) =>
      //   console.log(res, "updateQuizInfo!!!!!!!!!!!!")
      // );
      // Axios.get("/users/updateCigarettes").then((res) =>
      //   console.log(res, "updateCigarettes!!!!!!!!!!!!")
      // );

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
