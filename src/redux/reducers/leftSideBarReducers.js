//import { combineReducers } from "redux";

import sideBarActionsTypes from "../actions/leftSideBarActions";
const initialUserState = { name: null, email: null };
export const user = (state = {}, { type, payload }) => {
  switch (type) {
    case sideBarActionsTypes.GET_CURRENT_USER_SUCCESS:
      return payload; //try request!!!!!

    case sideBarActionsTypes.LOGOUT_SUCCESS:
      return initialUserState; //try request!!!!!
    default:
      return state;
  }
};
