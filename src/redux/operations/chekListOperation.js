import axios from "axios";
import checkListActions from "../actions/checkListActions";

axios.defaults.baseURL = "https://make-it-habit-api.herokuapp.com";
axios.defaults.headers.common.Authorization = "";
// console.dir(axios);

const getHabitsOperation = () => (dispatch) => {
  dispatch(checkListActions.getHabitsRequest());
  axios
    .get("https://make-it-habit-api.herokuapp.com/habits")
    .then((response) => {
      dispatch(checkListActions.getHabitsSuccess(response.data.habits));
    })
    .catch((error) => console.log(error));
};

const addHabitStatus = () => (dispatch) => {
  console.log("addHabitStatus");
  dispatch(checkListActions.addHabitStatusRequest());
  axios
    .get("/habits")
    .then((res) => {
      // console.log("res", res.data.habits)
      dispatch(checkListActions.addHabitStatusSuccess(res.data.habits));
    })
    .catch((error) => console.log(error));
};

export default { getHabitsOperation, addHabitStatus };
