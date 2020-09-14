import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import spinnerReducers from "./spinnerReducers";
import authReducer from "./authReducer";
import dataUserReducer from "./reducersProfile";
import castomHabitRedusers from "./castomHabitRedusers";

export const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const root = combineReducers({
  loading: spinnerReducers.loadingReducer,

  auth: persistReducer(persistConfig, authReducer),

  user: dataUserReducer,

  quizInfo: () => ({
    smokeYears: 0,
    cigarettePerDay: 0,
    cigarettePerTime: 0,
    cigarettePackPrice: 0,
  }),
  dayInfo: () => ({
    cigaretteQuantity: 0,
  }),

  habits: castomHabitRedusers,
});

export default root;
