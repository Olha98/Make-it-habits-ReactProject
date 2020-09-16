import axios from 'axios';
import checkListActions from '../actions/checkListActions';

axios.defaults.baseURL = 'https://make-it-habit-api.herokuapp.com';
axios.defaults.headers.common.Authorization =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNWYzOTk2YzEyMDY3MDAxN2Q5NDA1OSIsImlhdCI6MTYwMDE2NjI3MSwiZXhwIjoxNjAwNzcxMDcxfQ.ZEr-PVbspvDc-RZkLoxnXsPSq2ogk47IFKttfLcN76s';
console.dir(axios);

const getHabitsOperation = () => dispatch => {
  dispatch(checkListActions.getHabitsRequest());
  axios
    .get('https://make-it-habit-api.herokuapp.com/habits')
    .then(response => {
      dispatch(checkListActions.getHabitsSuccess(response.data.habits));
    })
    .catch(error => console.log(error));
};

const addHabitStatus = () => dispatch => {
  console.log('addHabitStatus');
  dispatch(checkListActions.addHabitStatusRequest());
  axios
    .get('/habits')
    .then(res => {
      // console.log("res", res.data.habits)
      dispatch(checkListActions.addHabitStatusSuccess(res.data.habits));
    })
    .catch(error => console.log(error));
};

export default { getHabitsOperation, addHabitStatus };
