import axios from 'axios';
import { getCigarettes } from '../actions/cigarettesActions';
import { getHabits } from '../actions/habitsActions';
import getQuizeInfo from '../actions/quizInfoActions';
import actionsLoader from '../actions/spinnerActions';
import actionsState from '../actions/stateActions';
import { getUserData } from '../actions/userActions';
import achievementAction from '../actions/achievementAction';

import isAuthenticated from '../selectors/authSelector';
import { token } from './authOperation';

export const getGlobalState = () => (dispatch, getState) => {
  const tokenNow = isAuthenticated.isAuthenticated(getState());
  if (!tokenNow) return;

  token.set(tokenNow);
  dispatch(actionsLoader.loaderOn());
  dispatch(actionsState.getAllStateRequest());
  axios
    .get('https://make-it-habit-api.herokuapp.com/habits')
    .then(res => {
      console.log('resOPER', res);
      dispatch(getUserData({ ...res.data.user }));
      dispatch(getHabits([...res.data.habits]));
      dispatch(getCigarettes({ ...res.data.user.cigarettes }));
      dispatch(getQuizeInfo.getInfoSuccess({ ...res.data.user.quizInfo }));
      dispatch(
        achievementAction({
          smokedCigarettes: res.data.user.cigarettes,
          quizInfoPerDay: res.data.user.quizInfo.cigarettePerDay,
          quizInfoPerTime: res.data.user.quizInfo.cigarettePerTime,
        }),
      );
    })
    .catch(error => actionsState.getAllStateError(error))
    .finally(() => {
      dispatch(actionsLoader.loaderOff());
    });
};
