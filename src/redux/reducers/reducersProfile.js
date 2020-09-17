import constTypes from '../constants/constProfile';

const initialState = {
  avatar: '16',
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  registerData: '',
};

const dataUserReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    // case constTypes.GET_DATA_USER_SUCCESS:
    //   return { ...action.payload }; //! замена на общий запрос при аутентификации userData

    case constTypes.ADD_DATA_USER_SUCCESS:
      console.log('action', action);
      return action.payload;

    default:
      return state;
  }
};

export default dataUserReducer;
