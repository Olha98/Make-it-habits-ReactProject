import React from "react";
import constans from "../constants/authConstans";

const registerRequest = (credential) => ({
  type: constans.REGISTER_REQUEST,
  payload: credential,
});

const registerSucces = (credential) => ({
  type: constans.REGISTER_SUCCESS,
  payload: credential,
});

const registerError = (error) => ({
  type: constans.REGISTER_ERROR,
  payload: error,
});

const loginRequest = (credential) => ({
  type: constans.LOGIN_REQUEST,
  payload: credential,
});

const loginSucces = (credential) => ({
  type: constans.LOGIN_SUCCESS,
  payload: credential,
});

const loginError = (error) => ({
  type: constans.LOGIN_ERROR,
  payload: error,
});

export default {
  registerRequest,
  registerSucces,
  registerError,
  loginRequest,
  loginSucces,
  loginError,
};
