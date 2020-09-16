import authConstans from "../constants/authConstans";

const user = (state = {}, { type, payload }) => {
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
