import axios from 'axios';
import checkListActions from '../actions/checkListActions';
// import { actionsGetUserData } from '../actions/dataUser';
import { getHabits } from '../actions/habitsActions';
// import { getUserData } from '../actions/userActions';

const addHabitStatus = updateInfo => dispatch => {
  dispatch(checkListActions.addHabitStatusRequest());
  axios
    .patch('/habits', updateInfo)
    .then(res => {
      // console.log('resCHECKoper', res);
      axios
        .get('/habits')
        .then(res => dispatch(getHabits([...res.data.habits])));
      //   // dispatch(checkListActions.addHabitStatusSuccess(res.data.habits));
    })
    .catch(error => console.log(error));
};

export default addHabitStatus;
