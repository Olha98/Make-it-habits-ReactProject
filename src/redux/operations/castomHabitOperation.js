import axios from 'axios';
import { token } from './authOperation';
// import { getHabits } from '../actions/habitsActions';
import customHabitActions from '../actions/castomHabitActions';

const addHabitOperation = habit => (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);
  axios
    .post('habits', habit)
    .then(res => {
      // console.log('res!!!!!', res)
      dispatch(customHabitActions.addCustomHabit({ ...res.data }));
    })
    .catch(error => console.log('ERROR'));
};

const removeHabitOperation = habitId => (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);

  axios
    .delete(`habits/${habitId}`)
    .then(res => {
      dispatch(customHabitActions.removeCustomHabit(habitId));
    })
    .catch(error => {
      console.log(error, 'error');
    });
};

const patchHabitOperation = habit => (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);
  axios
    .patch('habits', habit)
    .then(res => {
      console.log('res', res);
      dispatch(customHabitActions.patchHabitStatus(res.data.updatedHabit));
    })
    .catch(error => console.log('ERROR'));
};

export default { addHabitOperation, removeHabitOperation, patchHabitOperation };
