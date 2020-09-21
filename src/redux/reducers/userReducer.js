import { GET_USER_DATA } from '../constants/userConstants';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  registerData: '',
  avatar: '',
  phone: '',
  cards: [],
  payments: [],
};

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      const {
        firstName,
        lastName,
        email,
        registerData,
        avatar,
        phone,
        cards = [],
        payments = [],
      } = action.payload;
      return {
        ...state,
        firstName,
        lastName,
        email,
        registerData,
        avatar,
        phone,
        cards,
        payments,
      };

    default:
      return state;
  }
};
