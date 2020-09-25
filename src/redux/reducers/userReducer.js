import { GET_USER_DATA } from '../constants/userConstants';
import { cardsConstants } from '../constants';
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
  subscription: 'Free',
};

const userReducer = (state = { ...initialState }, action) => {
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
      let cards = [];
      if (!action.payload.cards) {
        const cardsTemp = action.payload.payments; // временно перепутаны поля на бэкенде
        // поле платежей на бэкенде ещё не добавлено
        // const payments = action.payload.cards;

        for (let i = 0; i < cardsTemp.length; i += 1) {
          const id = i + 1;
          cards.push({ ...cardsTemp[i], id });
        }
      } else {
        cards = [...action.payload.cards];
      }
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

    case cardsConstants.ADD_CARD_SUCCESS:
      const countCards = state.cards.length;
      const newId = state.cards[countCards - 1] + 1;
      const cardsPlus = [...state.cards, { ...action.payload, id: newId }];
      return { ...state, cards: cardsPlus };
    case cardsConstants.REMOVE_CARD_SUCCESS:
      const newCards = state.cards.filter(item => item.id !== action.payload);
      return { ...state, cards: newCards };
    case cardsConstants.ADD_PAYMENT_SUCCESS:
      const newPayments = [...state.payments, action.payload];
      return { ...state, payments: newPayments };

    case authConstans.LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
