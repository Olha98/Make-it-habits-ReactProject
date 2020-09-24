import { subscrConstants } from '../constants';

const changeTypeRequest = () => ({
  type: subscrConstants.CHANGE_TYPE_REQUEST,
});

const changeTypeSuccess = plan => ({
  type: subscrConstants.CHANGE_TYPE_SUCCESS,
  payload: plan,
});

const changeTypeError = error => ({
  type: subscrConstants.CHANGE_TYPE_ERROR,
  payload: error,
});

const cancelTypeRequest = () => ({
  type: subscrConstants.CANCEL_TYPE_REQUEST,
});

const cancelTypeSuccess = () => ({
  type: subscrConstants.CANCEL_TYPE_SUCCESS,
});

const cancelTypeError = error => ({
  type: subscrConstants.CANCEL_TYPE_ERROR,
  payload: error,
});

export default {
  changeTypeRequest,
  changeTypeSuccess,
  changeTypeError,
  cancelTypeRequest,
  cancelTypeSuccess,
  cancelTypeError,
};
