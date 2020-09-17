// import actions from "../actions/castomHabitActions";
import axios from "axios";
import checkListActions from "../actions/checkListActions";
import { token } from "./authOperation";
import { actionsGetUserData } from "../actions/dataUser";
// axios.defaults.baseURL = "https://make-it-habit-api.herokuapp.com/";
// axios.defaults.headers.common.Authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNWYzOTk2YzEyMDY3MDAxN2Q5NDA1OSIsImlhdCI6MTYwMDA4MjEwNSwiZXhwIjoxNjAwNjg2OTA1fQ.ZJ6D6WOT-ym-ZjcodwuDzzkAkr21qv-MwQVGLef5fcs";

const addHabitOperation = habit => (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);
  axios
    .post('habits', habit)
    .then(response => {
      console.log(response, "response")
      // dispatch(checkListActions.addHabitStatusSuccess({ ...response.data, ...habit }));
      axios.get('/habits').then(res => {
        dispatch(
          actionsGetUserData({ ...res.data.user, habits: res.data.habits }),
        );
      });
    })
    .catch(error => console.log('ERROR'));
};

const removeHabitOperation = habitId => (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);
  axios
    .delete(`habits/${habitId}`)
    .then(() => {
      // dispatch(checkListActions.removeCustomHabit(habitId));
      axios.get('/habits').then(res => {
        dispatch(
          actionsGetUserData({ ...res.data.user, habits: res.data.habits }),
        );
      });
    })
    .catch(error => {
      console.log(error, 'error');
    });
};


export default { addHabitOperation, removeHabitOperation };
