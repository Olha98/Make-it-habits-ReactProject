import React from "react";
import constans from "../constants/authConstans";

const registrationRequest = (credential) => ({
  type: constans.REGISTER_REQUEST,
  payload: credential,
});

const registrationSucces = (credential) => ({
  type: constans.REGISTER_SUCCESS,
  payload: credential,
});

const registrationError = (error) => ({
  type: constans.REGISTER_ERROR,
  payload: error,
});

const loginRequest = (credential) => ({
  type: constans.LOGIN_REQUEST,
  payload: credential,
});

const loginSucces = (credential) => {
  console.log(credential, "loginSucces");
  return {
    type: constans.LOGIN_SUCCESS,
    payload: credential,
  };
};
const loginError = (error) => ({
  type: constans.LOGIN_ERROR,
  payload: error,
});

export default {
  registrationRequest,
  registrationSucces,
  registrationError,
  loginRequest,
  loginSucces,
  loginError,
};
