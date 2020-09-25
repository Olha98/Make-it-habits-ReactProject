import axios from 'axios';
import { token } from './authOperation';
import actionsLoader from '../actions/spinnerActions';
import customHabitActions from '../actions/castomHabitActions';

const addHabitOperation = habit => (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);
  dispatch(actionsLoader.loaderOn());
  axios
    .post('habits', habit)
    .then(res => {
      dispatch(customHabitActions.addCustomHabit({ ...res.data }));
    })
    .catch(error => console.log('ERROR'))
    .finally(dispatch(actionsLoader.loaderOff()))
};

const removeHabitOperation = habitId => (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);
  dispatch(actionsLoader.loaderOn());
  axios
    .delete(`habits/${habitId}`)
    .then(res => {
      dispatch(customHabitActions.removeCustomHabit(habitId));
    })
    .catch(error => {
      console.log(error, 'error');
    })
    .finally(dispatch(actionsLoader.loaderOff()))
};

const patchHabitOperation = habit => (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);
  dispatch(actionsLoader.loaderOn());
  axios
    .patch('habits', habit)
    .then(res => {
      dispatch(customHabitActions.patchHabitStatus(res.data.updatedHabit));
    })
    .catch(error => console.log('ERROR'))
    .finally(dispatch(actionsLoader.loaderOff()))
};

export default { addHabitOperation, removeHabitOperation, patchHabitOperation };
