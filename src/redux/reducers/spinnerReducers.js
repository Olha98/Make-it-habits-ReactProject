import constantsTypes from "../constants/constantsTypes";

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case constantsTypes.LOADER_ON:
      return true;
    case constantsTypes.LOADER_OFF:
      return false;

    default:
      return state;
  }
};

export default { loadingReducer };
