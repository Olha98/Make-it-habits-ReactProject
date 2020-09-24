import { GET_USER_DATA } from '../constants/userConstants';
import authConstans from '../constants/authConstans';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  registerData: '',
  avatar: '',
  phone: '',
  cards: [],
  payments: [],
  subscription: '',
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
        subscription,
      } = action.payload;

      const cards = action.payload.payments; // временно перепутаны поля на бэкенде
      // поле платежей на бэкенде ещё не добавлено
      // const payments = action.payload.cards;
      return {
        ...state,
        firstName,
        lastName,
        email,
        registerData,
        avatar,
        phone,
        cards,
        // payments,
        subscription,
      };

    case authConstans.LOGOUT:
      return initialState;

    default:
      return state;
  }
};
