import axios from 'axios';
import actionsLoader from '../actions/spinnerActions';
import actionsState from '../actions/stateActions';

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
      // dispatch(actionsState.getAllStateSuccess(res.data.habits));
      dispatch(actionsState.getAllStateSuccess({habits: res.data.habits, cigarettes: res.user.cigarettes}));

    })
    .catch(error => actionsState.getAllStateError(error))
    .finally(() => {
      dispatch(actionsLoader.loaderOff());
    });
};
