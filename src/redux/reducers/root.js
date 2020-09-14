import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import imgAva from "../../assests/images/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png";
import authReducer from "./authReducer";
import spinnerReducers from "../../components/Spinner/redux/spinnerReducers";

export const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const root = combineReducers({
  loading: spinnerReducers.loadingReducer,

  auth: persistReducer(persistConfig, () => ({
    token: "",
    login: "",
    email: "",
  })),

  user: () => ({
    avatar: imgAva,
    firstName: "Anna",
    lastName: "Bond",
    phone: "+3809438643",
    email: "admin@gmail.com",
    registerData: Date.now(),
  }),
  quizInfo: () => ({
    smokeYears: 0,
    cigarettePerDay: 6,
    cigarettePerTime: 15,
    cigarettePackPrice: 100,
  }),

  dayInfo: () => ({
    cigaretteQuantity: 1,
  }),

  habits: () => [
    {
      createAt: "",
      data: [],
      planningTime: 0,
      efficiency: 0,
      id: "",
      name: "Замена сигарет на леденцы, орешки и т.п.",
      iteration: "",
    },
    {
      createAt: "",
      data: [],
      planningTime: 0,
      efficiency: 0,
      id: "1",
      name: "Читать минимум 30 мин в день",
      iteration: "",
    },
    {
      createAt: "",
      data: [],
      planningTime: 0,
      efficiency: 0,
      id: "2",
      name: "Замена сигарет на леденцы, орешки и т.п.",
      iteration: "",
    },
    {
      createAt: "",
      data: [],
      planningTime: 0,
      efficiency: 0,
      id: "3",
      name: "qweqqweqweqweqw3",
      iteration: "",
    },
    {
      createAt: "",
      data: [],
      planningTime: 0,
      efficiency: 0,
      id: "4",
      name: "qweqqweqweqweqw4",
      iteration: "",
    },
    {
      createAt: "",
      data: [],
      planningTime: 0,
      efficiency: 0,
      id: "5",
      name: "Читать минимум 30 мин в день",
      iteration: "",
    },
    {
      createAt: "",
      data: [],
      planningTime: 0,
      efficiency: 0,
      id: "6",
      name: "Читать минимум 30 мин в день",
      iteration: "",
    },
    {
      createAt: "",
      data: [],
      planningTime: 0,
      efficiency: 0,
      id: "7",
      name: "Читать минимум 30 мин в день",
      iteration: "",
    },
    {
      createAt: "",
      data: [],
      planningTime: 0,
      efficiency: 0,
      id: "8",
      name: "Читать минимум 30 мин в день",
      iteration: "",
    },
    {
      createAt: "",
      data: [],
      planningTime: 0,
      efficiency: 0,
      id: "9",
      name: "Читать минимум 30 мин в день",
      iteration: "",
    },
    {
      createAt: "",
      data: [],
      planningTime: 0,
      efficiency: 0,
      id: "10",
      name: "Читать минимум 30 мин в день",
      iteration: "",
    },
    {
      createAt: "",
      data: [],
      planningTime: 0,
      efficiency: 0,
      id: "11",
      name: "Читать минимум 30 мин в день",
      iteration: "",
    },
    {
      createAt: "",
      data: [],
      planningTime: 0,
      efficiency: 0,
      id: "12",
      name: "Читать минимум 30 мин в день",
      iteration: "",
    },
  ],
});

export default root;
