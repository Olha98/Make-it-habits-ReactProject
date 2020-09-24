import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import spinnerReducers from './spinnerReducers';
import achievementReducer from './achievementReducer';
import authReducer from './authReducer';
import quizReducer from './quizInfoReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';
import habitsReducer from './habitsReducer';
import cigarettesReducer from './cigarettesReduser';

export const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['access_token'],
};

const root = combineReducers({
  loading: spinnerReducers.loadingReducer,
  achievement: achievementReducer,
  auth: persistReducer(persistConfig, authReducer),
  user: userReducer,
  habits: habitsReducer,
  cigarettes: cigarettesReducer,
  quizInfo: quizReducer,
  error: errorReducer,
});

export default root;
