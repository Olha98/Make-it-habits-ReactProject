import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import imgAva from "../../assests/images/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png";
import spinnerReducers from "../../components/Spinner/redux/spinnerReducers";
import habitReducer from "./checkListReducers";

export const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const root = combineReducers({
  loading: spinnerReducers.loadingReducer,
  auth: persistReducer(persistConfig, () => ({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNWYzOTk2YzEyMDY3MDAxN2Q5NDA1OSIsImlhdCI6MTYwMDA4OTg4OCwiZXhwIjoxNjAwNjk0Njg4fQ.R9a8jXr0bVEDQ0-8J1_t9WZ7FxeO_lRIRW6UKKksQcI",
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

  habits: habitReducer,
});

export default root;
