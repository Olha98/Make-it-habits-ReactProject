import {
  GET_STATE_REQUEST,
  GET_STATE_SUCCESS,
  GET_STATE_ERROR,
} from '../constants/stateConstants';

const getAllStateRequest = () => {
  return {
    type: GET_STATE_REQUEST,
  };
};

const getAllStateSuccess = state => {
  return {
    type: GET_STATE_SUCCESS,
    payload: state,
  };
};

const getAllStateError = error => {
  return {
    type: GET_STATE_ERROR,
    payload: error,
  };
};

export default {
  getAllStateRequest,
  getAllStateSuccess,
  getAllStateError,
};
