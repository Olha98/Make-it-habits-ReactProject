import authConstants from '../constants/authConstans';

const initialState = {
  access_token: '',
};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case authConstants.REGISTER_SUCCESS:
      return payload;

    case authConstants.LOGIN_SUCCESS:
      return payload;

    case authConstants.LOGOUT:
      return '';

    default:
      return state;
  }
};

export default auth;
