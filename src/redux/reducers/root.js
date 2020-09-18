import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import habitReducer from './checkListReducers';
import spinnerReducers from './spinnerReducers';
import authReducer from './authReducer';
import dayInfoReducer from './dailyCiggaretsReduces';
import quizReducer from './quizInfoReducer';

import userReducer from './userReducer';
import habitsReducer from './habitsReducer';


export const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['access_token', 'email'],
};

export const persistUserConfig = {
  key: 'user',
  storage,
  blacklist: ['id'],
  // blacklist: ['id', 'quizInfo', "cigarettes"],
};

const root = combineReducers({
  loading: spinnerReducers.loadingReducer,

  auth: persistReducer(persistConfig, authReducer),
  user: persistReducer(persistUserConfig, userReducer),
  habits: habitsReducer,



  // user: persistReducer(persistUserConfig, dataUserReducer),
  quizInfo: quizReducer.quizInfo,
  error: quizReducer.error,

  // quizInfo: () => ({
  //   smokeYears: 0,
  //   cigarettePerDay: 0,
  //   cigarettePerTime: 0,
  //   cigarettePackPrice: 0,
  // }),
  dayInfo: dayInfoReducer,
});

export default root;
