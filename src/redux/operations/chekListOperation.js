import axios from 'axios';
import checkListActions from '../actions/checkListActions';
import { getHabits } from '../actions/habitsActions';

const addHabitStatus = updateInfo => dispatch => {
  dispatch(checkListActions.addHabitStatusRequest());
  axios
    .patch('/habits', updateInfo)
    .then(res => {
      axios
        .get('/habits')
        .then(res => dispatch(getHabits([...res.data.habits])));
    })
    .catch(error => console.log(error));
};

export default addHabitStatus;
