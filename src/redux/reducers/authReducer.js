import React from "react";
import { combineReducers } from "redux";
import authAction from "../actions/authAction";
import authConstans from "../constants/authConstans";

const initialState = {
  login: null,
  email: null,
};

const User = (state = initialState, { type, payload }) => {
  switch (type) {
    case authConstans.REGISTER_SUCCESS:
      return payload;

    case authConstans.LOGIN_SUCCESS:
      return payload;

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case authConstans.REGISTER_SUCCESS:
      return payload.access_token;
    case authConstans.LOGIN_SUCCESS:
      console.log(payload, "payload token");
      return payload.access_token;

    default:
      return state;
  }
};

export default combineReducers({ User, token });
