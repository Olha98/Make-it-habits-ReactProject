import { combineReducers } from 'redux';
// import actionsProfile from "../actions/actionsProfile";
import constTypes from '../constants/constProfile';
// import imgAva from "../../assests/images/avatars/Avatar-default.png";

// const initialState = {
//   avatar: imgAva,
//   firstname: "Anna",
//   lastname: "Vygovska",
//   phone: "0505450652",
//   email: "Zzz@gmail.com",
//   registerData: Date.now(),
// };

const initialState = {
  avatar: '',
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  registerData: '',
};

const dataUserReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case constTypes.GET_DATA_USER_SUCCESS:
      return { ...action.payload }; //! userData Оля

    case constTypes.ADD_DATA_USER_SUCCESS:
      // console.log("action", action);
      return action.payload;

    default:
      return state;
  }
};

export default dataUserReducer;
