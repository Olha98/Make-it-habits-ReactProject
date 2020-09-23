import { quizInfoConstants } from '../constants';

const addInfoRequest = () => ({
  type: quizInfoConstants.ADD_INFO_REQUEST,
});

const addInfoSuccess = info => ({
  type: quizInfoConstants.ADD_INFO_SUCCESS,
  payload: { ...info },
});

const addInfoError = error => ({
  type: quizInfoConstants.ADD_INFO_ERROR,
  payload: error,
});

const getInfoRequest = () => ({
  type: quizInfoConstants.GET_INFO_REQUEST,
});

const getInfoSuccess = info => ({
  type: quizInfoConstants.GET_INFO_SUCCESS,
  payload: info,
});

const getInfoError = error => ({
  type: quizInfoConstants.GET_INFO_ERROR,
  payload: error,
});

export default {
  addInfoRequest,
  addInfoSuccess,
  addInfoError,
  getInfoRequest,
  getInfoSuccess,
  getInfoError,
};
