import axios from "axios";
import authAction from "../actions/authAction";
import { actionsGetUserData } from "../actions/dataUser";
import userActions from "../actions/actionsProfile";

axios.defaults.baseURL = "https://make-it-habit-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = token;
    console.log("token", token);
  },
  unSet() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const userRegistration = (credentials) => (dispatch) => {
  dispatch(authAction.registrationRequest());
  console.log(credentials);
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
  console.log(credentials);
  axios
    .post("/auth/login", credentials)
    .then((res) => {
      token.set(res.data.access_token);
      dispatch(authAction.loginSucces(res.data));

      axios.get("/habits").then((res) => {
        console.log(res, "res!!!!!!!!");
        dispatch(actionsGetUserData({...res.data.user, ...res.data.habits}));
      });

      
    })
    .catch((err) => {
      console.log(err, "error");
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

export default { userRegistration, userLogin, userLogOut };
