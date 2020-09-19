import axios from 'axios';
import checkListActions from '../actions/checkListActions';

// axios.defaults.baseURL = "https://make-it-habit-api.herokuapp.com";
// axios.defaults.headers.common.Authorization =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNWYzOTk2YzEyMDY3MDAxN2Q5NDA1OSIsImlhdCI6MTYwMDE2NjI3MSwiZXhwIjoxNjAwNzcxMDcxfQ.ZEr-PVbspvDc-RZkLoxnXsPSq2ogk47IFKttfLcN76s';
// console.dir(axios);

// const getHabitsOperation = () => dispatch => {
//   dispatch(checkListActions.getHabitsRequest());
//   axios
//     .get('https://make-it-habit-api.herokuapp.com/habits')
//     .then(response => {
//       dispatch(checkListActions.getHabitsSuccess(response.data.habits));
//     })
//     .catch(error => console.log(error));
// };

const addHabitStatus = updateInfo => dispatch => {
  console.log('updateInfoOPER', updateInfo);
  dispatch(checkListActions.addHabitStatusRequest());
  axios.patch('/habits', updateInfo).then(res => {
    console.log('res', res);
    //   // dispatch(checkListActions.addHabitStatusSuccess(res.data.habits));
  });
  // .catch(error => console.log(error));
};

export default addHabitStatus;
