import quizInfoConstants from '../constants/quizInfoConstants';

const addInfoRequest = () => ({
  type: quizInfoConstants.ADD_REQUEST,
});

const addInfoSuccess = info => ({
  type: quizInfoConstants.ADD_SUCCESS,
  payload: { ...info },
});

const addInfoError = error => ({
  type: quizInfoConstants.ADD_ERROR,
  payload: { error },
});

const getInfoRequest = () => ({
  type: quizInfoConstants.GET_REQUEST,
});

const getInfoSuccess = info => ({
  type: quizInfoConstants.GET_SUCCESS,
  payload: info,
});

const getInfoError = error => ({
  type: quizInfoConstants.GET_ERROR,
  payload: { error },
});

export default {
  addInfoRequest,
  addInfoSuccess,
  addInfoError,
  getInfoRequest,
  getInfoSuccess,
  getInfoError,
};
