import constants from '../constants/authConstans';

const registrationRequest = () => ({
  type: constants.REGISTER_REQUEST,
});

const registrationSuccess = credential => ({
  type: constants.REGISTER_SUCCESS,
  payload: credential,
});

const registrationError = error => ({
  type: constants.REGISTER_ERROR,
  payload: error,
});

const loginRequest = () => ({
  type: constants.LOGIN_REQUEST,
});

const loginSuccess = (credential) => {
  return {
    type: constants.LOGIN_SUCCESS,
    payload: credential,
  };
};

const loginError = error => ({
  type: constants.LOGIN_ERROR,
  payload: error,
});
const logOutError = error => ({
  type: constants.LOGOUT_ERROR,
  payload: error,
});

const logout = () => ({
  type: constants.LOGOUT,
})



export default {
  registrationRequest,
  registrationSuccess,
  registrationError,
  loginRequest,
  loginSuccess,
  loginError,
  logout,
  logOutError,
};
