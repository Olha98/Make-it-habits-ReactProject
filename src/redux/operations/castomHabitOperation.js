import axios from 'axios';
import actionsLoader from '../actions/spinnerActions';
import customHabitActions from '../actions/castomHabitActions';

const addHabitOperation = habit => async dispatch => {
  dispatch(actionsLoader.loaderOn());
  dispatch(customHabitActions.addCustomHabitRequest());
  try {
    const res = await axios.post('habits', habit);
    dispatch(customHabitActions.addCustomHabit({ ...res.data }));
  } catch (error) {
    dispatch(customHabitActions.addCustomHabitError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

const removeHabitOperation = habitId => async dispatch => {
  dispatch(actionsLoader.loaderOn());
  dispatch(customHabitActions.removeCustomHabitRequest());
  try {
    await axios.delete(`habits/${habitId}`);
    dispatch(customHabitActions.removeCustomHabit(habitId));
  } catch (error) {
    dispatch(customHabitActions.removeCustomHabitError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

const patchHabitOperation = habit => async dispatch => {
  dispatch(actionsLoader.loaderOn());
  dispatch(customHabitActions.patchHabitRequest());
  try {
    const res = await axios.patch('habits', habit);
    dispatch(customHabitActions.patchHabitStatus(res.data.updatedHabit));
  } catch (error) {
    dispatch(customHabitActions.patchHabitError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

export default { addHabitOperation, removeHabitOperation, patchHabitOperation };
