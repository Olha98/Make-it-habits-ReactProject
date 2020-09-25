import axios from 'axios';
import { getCigarettes } from '../actions/cigarettesActions';
import { getHabits } from '../actions/habitsActions';
import { quizInfoActions, spinnerActions } from '../actions';
import actionsState from '../actions/stateActions';
import { getUserData } from '../actions/userActions';
import achievementAction from '../actions/achievementAction';
import { authSelector, cardsSelectors } from '../selectors';
import { token } from './authOperation';

export const getGlobalState = () => (dispatch, getState) => {
  const tokenNow = authSelector.isAuthenticated(getState());
  if (!tokenNow) return;

  token.set(tokenNow);

  const cards = cardsSelectors.getCards(getState());

  dispatch(spinnerActions.loaderOn());
  dispatch(actionsState.getAllStateRequest());
  axios
    .get('https://make-it-habit-api.herokuapp.com/habits')
    .then(res => {
      console.log('res habits', res)
      if (cards.length === 0) {
        dispatch(getUserData({ ...res.data.user }));
      } else {
        dispatch(getUserData({ ...res.data.user, cards }));
      }
      dispatch(getHabits([...res.data.habits]));
      dispatch(getCigarettes({ ...res.data.user.cigarettes }));
      dispatch(quizInfoActions.getInfoSuccess({ ...res.data.user.quizInfo }));
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
      dispatch(spinnerActions.loaderOff());
    });
};
