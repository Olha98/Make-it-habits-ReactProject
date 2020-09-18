import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import habitReducer from './checkListReducers';
import spinnerReducers from './spinnerReducers';
import authReducer from './authReducer';
import quizReducer from './quizInfoReducer';
import subscribeReducer from './subscribeReducer';
import dayInfoReducer from './dailyCiggaretsReduces';
import dataUser from '../actions/dataUser';

export const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['access_token', 'email'],
};

export const persistUserConfig = {
  key: 'user',
  storage,
  blacklist: ['id'],
};

const root = combineReducers({
  loading: spinnerReducers.loadingReducer,

  auth: persistReducer(persistConfig, authReducer),

  user: persistReducer(persistUserConfig, dataUser),
  // user: persistReducer(persistUserConfig, dataUserReducer),
  quizInfo: quizReducer.quizInfo, // удалим попозже (LeftSideBar-селектор перенастроят вначале)
  error: quizReducer.error,
  typeSubscription: subscribeReducer.typeSubscription,
  cards: subscribeReducer.addCard,
  isPaid: false,

  dayInfo: dayInfoReducer,

  habits: habitReducer,
});

export default root;
