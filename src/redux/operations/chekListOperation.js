import axios from 'axios';
import checkListActions from '../actions/checkListActions';
import { getHabits } from '../actions/habitsActions';
import actionsLoader from '../actions/spinnerActions';

const addHabitStatus = updateInfo => async dispatch => {
  dispatch(actionsLoader.loaderOn());
  dispatch(checkListActions.addHabitStatusRequest());
  try {
    const { res } = await axios.patch('/habits', updateInfo);
    dispatch(getHabits([...res.data.habits]));
  } catch (error) {
    dispatch(checkListActions.addHabitStatusError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

export default addHabitStatus;
