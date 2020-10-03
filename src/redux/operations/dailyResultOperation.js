import axios from 'axios';
import { getCigarettes } from '../actions/cigarettesActions';
import dailyResultAction from '../actions/dailyResultAction';
import { spinnerActions } from '../actions';

const updateDailyResul = update => async dispatch => {
  dispatch(spinnerActions.loaderOn());
  dispatch(dailyResultAction.updateCiggaretsRequest());
  try {
    const res = await axios.post('/users/updateCigarettes', update);
    dispatch(getCigarettes({ ...res.data }));
  } catch (error) {
    dispatch(dailyResultAction.updateCiggaretsError(error));
  } finally {
    dispatch(spinnerActions.loaderOff());
  }
};

export default updateDailyResul;
