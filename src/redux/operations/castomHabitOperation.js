import actions from '../actions/castomHabitActions'
import axios from 'axios'
axios.defaults.baseURL = 'https://make-it-habit-api.herokuapp.com/';
//axios.defaults.headers.common.Authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNWYzOTk2YzEyMDY3MDAxN2Q5NDA1OSIsImlhdCI6MTYwMDA4MjEwNSwiZXhwIjoxNjAwNjg2OTA1fQ.ZJ6D6WOT-ym-ZjcodwuDzzkAkr21qv-MwQVGLef5fcs";


const addHabitOperation = habit => dispatch => {
    // dispatch(actions.addCustomHabit())
    // console.log('habit', habit)
    axios.post("habits", habit)
        .then(response => {
            // console.log(response, "response")
            dispatch(actions.addCustomHabit({ ...habit, habitId: response._id }))
        })
        .catch(error => console.log("ERROR"))
}

const removeHabitOperation = habitId => dispatch => {
    // dispatch(actions.removeContactRequest());
    axios
        .delete(`habits/${habitId}`)
.then(() => {
    // console.log(habitId, "SuccessID")
    dispatch(actions.removeCustomHabit(habitId))
        })
        .catch(error => {
            console.log(error, "error")
        });
};

export default {addHabitOperation, removeHabitOperation}