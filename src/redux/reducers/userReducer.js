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
        const cardsTemp = action.payload.payments;
        const startCount = cardsTemp.length;
        for (let i = 0; i < startCount; i += 1) {
          const id = i + 1;
          const ordinalNumber = startCount - i;
          cards.push({ ...cardsTemp[i], id, ordinalNumber });
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
        subscription,
      };

    case cardsConstants.ADD_CARD_SUCCESS:
      const countCards = state.cards.length;
      const newId = state.cards[countCards - 1].id + 1;
      const newOrderN = countCards + 1;
      const cardsPlus = [
        ...state.cards,
        { ...action.payload, id: newId, ordinalNumber: newOrderN },
      ];
      return { ...state, cards: cardsPlus };
    case cardsConstants.REMOVE_CARD_SUCCESS:
      const newCards = state.cards.filter(item => item.id !== action.payload);
      return { ...state, cards: newCards };
    case cardsConstants.LIFT_CARD_SUCCESS:
      const length = state.cards.length;
      let newNum = length - 1;
      const shuffledCards = state.cards.map(item => {
        if (item.id === action.payload) {
          item.ordinalNumber = length;
        } else {
          item.ordinalNumber = newNum;
          newNum -= 1;
        }
        return item;
      });
      return { ...state, cards: shuffledCards };
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
