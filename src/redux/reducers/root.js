import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import imgAva from "../../assests/images/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png";
import authReducer from "./authReducer";
import castomHabitRedusers from "./castomHabitRedusers";
import spinnerReducers from "../../components/Spinner/redux/spinnerReducers";

export const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const root = combineReducers({
  loading: spinnerReducers.loadingReducer,
  auth: persistReducer(persistConfig, authReducer),

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
    cigarettePerDay: 0,
    cigarettePerTime: 0,
    cigarettePackPrice: 0,
  }),
  dayInfo: () => ({
    cigaretteQuantity: 0,
  }),

  //  habits:()=>([{
  // createAt: "",
  // data: [],
  // planningTime: 0,
  // efficiency : 0,
  // id: "",
  // name: "",
  // iteration:"",
  //   }]),

  habits: castomHabitRedusers,
});

export default root;
