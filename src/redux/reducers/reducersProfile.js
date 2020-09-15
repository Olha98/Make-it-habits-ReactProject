// import actionsProfile from "../actions/actionsProfile";
import constTypes from "../constants/constProfile";
import imgAva from "../../assests/images/avatars/Avatar-default.png";

const initialState = {
  avatar: "",
  firstName: "wer",
  lastName: "sdaf",
  phone: "123456",
  email: "sdfghj@fghj.co",
  registerData: Date.now(),
};

const dataUserReducer = (state = { ...initialState }, action) => {
  // console.log("action", action);
  // console.log("type", action.type);
  switch (action.type) {
    case constTypes.GET_DATA_USER_SUCCESS:
      return { ...action.payload };

    case constTypes.ADD_DATA_USER_SUCCESS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default dataUserReducer;
