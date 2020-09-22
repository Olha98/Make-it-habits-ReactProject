import constTypes from '../constants/constProfile';

const initialState = {
  avatar: '',
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  registerData: '',
};

const dataUserReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case constTypes.ADD_DATA_USER_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

export default dataUserReducer;
