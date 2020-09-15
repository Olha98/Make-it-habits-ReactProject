// import actionsProfile from "../actions/actionsProfile";
import constTypes from "../constants/constProfile";
import imgAva from "../../assests/images/avatars/Avatar-default.png";

// const initialState = {
//   avatar: imgAva,
//   firstname: "Anna",
//   lastname: "Vygovska",
//   phone: "0505450652",
//   email: "Zzz@gmail.com",
//   registerData: Date.now(),
// };

const initialState = {
  avatar: imgAva,
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  registerData: "",
};

const dataUserReducer = (state = { ...initialState }, action) => {
  console.log("action1111111", action);
  console.log("nitialState", initialState);
  console.log("type", action.type);
  switch (action.type) {
    case constTypes.GET_DATA_USER_SUCCESS:
      console.log("action.type!!!!", action.type);
      return { ...state, ...action.payload };

    case constTypes.ADD_DATA_USER_SUCCESS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default dataUserReducer;
