import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import habitReducer from './checkListReducers';
import spinnerReducers from './spinnerReducers';
import authReducer from './authReducer';
import dataUser from '../actions/dataUser';
import quizInfoReducer from './quizInfoReducer';

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
  quizInfo: quizInfoReducer,

  dayInfo: () => ({
    cigaretteQuantity: 0,
  }),

  habits: habitReducer,
});

export default root;
