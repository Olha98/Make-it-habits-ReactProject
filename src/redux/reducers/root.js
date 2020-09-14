import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import imgAva from "../../assests/images/avatars/Avatar-default.png";
import spinnerReducers from "./spinnerReducers";
import dataUserReducer from "./reducersProfile";

export const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const root = combineReducers({
  loading: spinnerReducers.loadingReducer,

  auth: persistReducer(persistConfig, () => ({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNWYzOWYxYzEyMDY3MDAxN2Q5NDA1YSIsImlhdCI6MTYwMDA4MjA3NSwiZXhwIjoxNjAwNjg2ODc1fQ.eI8w8igQfNUs-9lHrRwkR7lq2cXuWPk1cEtHW2JX3SA",
    login: "",
    email: "",
  })),

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

  habits: () => [
    {
      createAt: "",
      data: [],
      planningTime: 0,
      efficiency: 0,
      id: "",
      name: "",
      iteration: "",
    },
  ],
});

export default root;
