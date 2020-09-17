import dailyResultConstans from "../constants/dailyResultConstant";

const updateCiggaretsRequest = () => ({
  type: dailyResultConstans.UPDATE_CIGGARETES_REQUEST,
});

const updateCiggaretsSuccess = (update) => ({
  type: dailyResultConstans.UPDATE_CIGGARETES_SUCCESS,
  payload: update,
});

const updateCiggaretsError = (error) => ({
  type: dailyResultConstans.UPDATE_CIGGARETES_ERROR,
  payload: error,
});

export default {
  updateCiggaretsRequest,
  updateCiggaretsSuccess,
  updateCiggaretsError,
};
