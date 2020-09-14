import React from "react";
import { combineReducers } from "redux";
import authAction from "../actions/authAction";

const initialState = {
  login: null,
  email: null,
};

const User = (state = initialState, { type, payload }) => {
  switch (type) {
    case authAction.registerSucces.type:
      return payload;
    case authAction.loginSucces.type:
      return payload;
    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case authAction.registerSucces.type:
      return payload.token;
    case authAction.loginSucces.type:
      return payload.token;

    default:
      return state;
  }
};

export default combineReducers({ User, token });
