import axios from 'axios';
import checkListActions from '../actions/checkListActions';
import { getHabits } from '../actions/habitsActions';
import actionsLoader from '../actions/spinnerActions';

const addHabitStatus = updateInfo => dispatch => {
  dispatch(actionsLoader.loaderOn());
  dispatch(checkListActions.addHabitStatusRequest());
  axios
    .patch('/habits', updateInfo)
    .then(res => {
      axios
        .get('/habits')
        .then(res => dispatch(getHabits([...res.data.habits])));
    })
    .catch(error => dispatch(checkListActions.addHabitStatusError(error)))
    .finally(dispatch(actionsLoader.loaderOff()));
};

export default addHabitStatus;
