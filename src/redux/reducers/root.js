import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import imgAva from "../../assests/images/avatars/Avatar-default.png";
import spinnerReducers from "../../components/Spinner/redux/spinnerReducers";

export const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const root = combineReducers({
  loading: spinnerReducers.loadingReducer,

  auth: persistReducer(persistConfig, () => ({
    token: "1234",
    login: "",
    email: "",
  })),

  user: () => ({
    avatar: imgAva,
    firstName: "Anna",
    lastName: "Vygovska",
    phone: "0505450652",
    email: "Zzz@gmail.com",
    registerData: Date.now(),
  }),

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
