import authConstans from "../constants/authConstans";

const initialState = {
  login: null,
  email: null,
  access_token: null,
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case authConstans.REGISTER_SUCCESS:
      return payload;

    case authConstans.LOGIN_SUCCESS:
      return payload;

    case authConstans.REGISTER_SUCCESS:
      return payload.access_token;

    case authConstans.LOGIN_SUCCESS:
      return payload.access_token;
      
    case authConstans.LOGOUT_SUCCESS:
      return "";

    default:
      return state;
  }
};

export default user;
