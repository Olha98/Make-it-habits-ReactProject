import actions from '../actions/castomHabitActions'
import axios from 'axios'
axios.defaults.baseURL = 'https://testprojectbc22.firebaseio.com/';


const addHabitOperation = habit => dispatch => {
    // dispatch(actions.addCustomHabit())
    axios.post("habits.json", habit)
        .then(responce => {
            console.log(responce, "responce")
            dispatch(actions.addCustomHabit({ ...habit, id: responce.data.name }))
        })
        .catch(error => console.log("ERROR"))
}

const removeHabitOperation = id => dispatch => {
    // dispatch(actions.removeContactRequest());
    axios
        .delete(`habits${id}.json`)
.then(() => {
            console.log(id, "SuccessID")
    dispatch(actions.removeCustomHabit(id))
        })
        .catch(error => {
            console.log(error, "error")
        });
};

export default {addHabitOperation, removeHabitOperation}