import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import quizInfoReducer from './quizInfoReducer';
import habitReducer from './checkListReducers';
import spinnerReducers from './spinnerReducers';
import authReducer from './authReducer';
import dataUserReducer from './reducersProfile';

export const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const root = combineReducers({
  loading: spinnerReducers.loadingReducer,

  auth: persistReducer(persistConfig, authReducer),
  user: dataUserReducer,
  quizInfo: quizInfoReducer,
  // user: { ...dataUserReducer, quizInfo: quizInfoReducer },

  dayInfo: () => ({
    cigaretteQuantity: 0,
  }),

  habits: habitReducer,
});

export default root;
