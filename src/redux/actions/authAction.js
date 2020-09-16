import constans from "../constants/authConstans";

const registrationRequest = (credential) => ({
  type: constans.REGISTER_REQUEST,
  payload: credential,
});

const registrationSucces = (credential) => ({
  type: constans.REGISTER_SUCCESS,
  payload: credential,
});

const registrationError = (error) => ({
  type: constans.REGISTER_ERROR,
  payload: error,
});

const loginRequest = (credential) => ({
  type: constans.LOGIN_REQUEST,
  payload: credential,
});

const loginSucces = (credential) => {
  console.log(credential, "loginSucces");
  return {
    type: constans.LOGIN_SUCCESS,
    payload: credential,
  };
};
const logOutError = (error) => ({
  type: constans.LOGIN_ERROR,
  payload: error,
});

const logOutRequest = () => ({
  type: constans.LOGOUT_START,
});

const logOutSuccess = () => ({
  type: constans.LOGOUT_SUCCESS,
});



export default {
  registrationRequest,
  registrationSucces,
  registrationError,
  loginRequest,
  loginSucces,
  logOutError,
  logOutRequest,
  logOutSuccess,
};
