import axios from 'axios';
import checkListActions from '../actions/checkListActions';
import actionsLoader from '../actions/spinnerActions';

const addHabitStatus = updateInfo => async dispatch => {
  dispatch(actionsLoader.loaderOn());
  dispatch(checkListActions.addHabitStatusRequest());
  try {
    await axios.patch('/habits', updateInfo);
    dispatch(checkListActions.addHabitStatusSuccess(updateInfo));
  } catch (error) {
    dispatch(checkListActions.addHabitStatusError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

export default addHabitStatus;
