import subscribeConstants from '../constants/subscribeConstants';

const changeTypeRequest = () => ({
  type: subscribeConstants.CHANGE_TYPE_REQUEST,
});

const changeTypeSuccess = typeSuscription => ({
  type: subscribeConstants.CHANGE_TYPE_SUCCESS,
  payload: typeSuscription,
});

const changeTypeError = error => ({
  type: subscribeConstants.CHANGE_TYPE_ERROR,
  payload: error,
});

const addCardRequest = () => ({
  type: subscribeConstants.ADD_CARD_REQUEST,
});

const addCardSuccess = card => ({
  type: subscribeConstants.ADD_CARD_SUCCESS,
  payload: card,
});

const addCardError = error => ({
  type: subscribeConstants.ADD_CARD_ERROR,
  payload: error,
});

export default {
  changeTypeRequest,
  changeTypeSuccess,
  changeTypeError,
  addCardRequest,
  addCardSuccess,
  addCardError,
};
