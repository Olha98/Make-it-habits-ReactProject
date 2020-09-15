import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import habitReducer from "./checkListReducers";
import spinnerReducers from "./spinnerReducers";
import authReducer from "./authReducer";

import dataUser from "../actions/dataUser";

export const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

export const persistUserConfig = {
  key: "user",
  storage,
  blacklist: ["id"],
};

const root = combineReducers({
  loading: spinnerReducers.loadingReducer,

  auth: persistReducer(persistConfig, authReducer),

  user: persistReducer(persistUserConfig, dataUser),

  quizInfo: () => ({
    smokeYears: 0,
    cigarettePerDay: 0,
    cigarettePerTime: 0,
    cigarettePackPrice: 0,
  }),
  dayInfo: () => ({
    cigaretteQuantity: 0,
  }),

  habits: habitReducer,
});

export default root;
