import axios from 'axios';
import { getCigarettes } from '../actions/cigarettesActions';
import { getHabits } from '../actions/habitsActions';
import { quizInfoActions, spinnerActions } from '../actions';
import actionsLoader from '../actions/spinnerActions';
import actionsState from '../actions/stateActions';
import { getUserData } from '../actions/userActions';

import { authSelector } from '../selectors';
import { token } from './authOperation';

export const getGlobalState = () => (dispatch, getState) => {
  const tokenNow = authSelector.isAuthenticated(getState());
  if (!tokenNow) return;

  token.set(tokenNow);
  dispatch(spinnerActions.loaderOn());
  dispatch(actionsState.getAllStateRequest());
  axios
    .get('https://make-it-habit-api.herokuapp.com/habits')
    .then(res => {
      // console.log('resOPER', res);
      dispatch(getUserData({ ...res.data.user }));
      dispatch(getHabits([...res.data.habits]));
      dispatch(getCigarettes({ ...res.data.user.cigarettes }));
      dispatch(quizInfoActions.getInfoSuccess({ ...res.data.user.quizInfo }));
    })
    .catch(error => actionsState.getAllStateError(error))
    .finally(() => {
      dispatch(spinnerActions.loaderOff());
    });
};
