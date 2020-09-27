import axios from 'axios';
import { token } from './authOperation';
import actionsLoader from '../actions/spinnerActions';
import customHabitActions from '../actions/castomHabitActions';

const addHabitOperation = habit => (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);
  dispatch(actionsLoader.loaderOn());
  dispatch(customHabitActions.addCustomHabitRequest());
  axios
    .post('habits', habit)
    .then(res => {
      dispatch(customHabitActions.addCustomHabit({ ...res.data }));
    })
    .catch(error => customHabitActions.addCustomHabitError(error))
    .finally(dispatch(actionsLoader.loaderOff()));
};

const removeHabitOperation = habitId => (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);
  dispatch(actionsLoader.loaderOn());
  dispatch(customHabitActions.removeCustomHabitRequest());
  axios
    .delete(`habits/${habitId}`)
    .then(res => {
      dispatch(customHabitActions.removeCustomHabit(habitId));
    })
    .catch(error => {
      customHabitActions.removeCustomHabitError(error);
    })
    .finally(dispatch(actionsLoader.loaderOff()));
};

const patchHabitOperation = habit => (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);
  dispatch(actionsLoader.loaderOn());
  dispatch(customHabitActions.patchHabitRequest());
  axios
    .patch('habits', habit)
    .then(res => {
      dispatch(customHabitActions.patchHabitStatus(res.data.updatedHabit));
    })
    .catch(error => customHabitActions.patchHabitError(error))
    .finally(dispatch(actionsLoader.loaderOff()));
};

export default { addHabitOperation, removeHabitOperation, patchHabitOperation };
