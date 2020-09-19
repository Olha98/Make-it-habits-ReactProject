import actions from '../actions/castomHabitActions';
import axios from 'axios';
import { actionsGetUserData } from '../actions/dataUser';
import { token } from './authOperation';
// axios.defaults.baseURL = "https://make-it-habit-api.herokuapp.com/";
// axios.defaults.headers.common.Authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNWYzOTk2YzEyMDY3MDAxN2Q5NDA1OSIsImlhdCI6MTYwMDA4MjEwNSwiZXhwIjoxNjAwNjg2OTA1fQ.ZJ6D6WOT-ym-ZjcodwuDzzkAkr21qv-MwQVGLef5fcs";

const addHabitOperation = habit => dispatch => {
  // dispatch(actions.addCustomHabit())
  // console.log('habit', habit)
  axios
    .post('habits', habit)
    .then(response => {
      // console.log(response, "response")
      dispatch(actions.addCustomHabit({ ...habit, habitId: response._id }));
    })
    .catch(error => console.log('ERROR'));
};

const removeHabitOperation = habitId => (dispatch, getState) => {

  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);

  axios
    .delete(`habits/${habitId}`)
    .then(() => {
      dispatch(actions.removeCustomHabit(habitId));
      
      axios.get('/habits').then(res => {
        console.log(res, 'updateDailyResul876545544');
        dispatch(
          actionsGetUserData({ ...res.data.user, habits: res.data.habits }),
        );
      });

    })
    .catch(error => {
      console.log(error, 'error');
    });
};

// const removeContact = id => dispatch => {
//   dispatch(contactsActions.remooveContactRequest());
//   axios
//     .delete(`https://bc22hwreact7.firebaseio.com/contacts/${id}.json`)
//     .then(() => {
//       dispatch(contactsActions.remooveContactSuccess(id))
//     })
//     .catch(error => {
//       dispatch(contactsActions.remooveContactError(error))
//     });
// };

export default { addHabitOperation, removeHabitOperation };
