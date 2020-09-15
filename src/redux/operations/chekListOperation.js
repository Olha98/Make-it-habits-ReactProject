import axios from "axios";
import checkListActions from "../actions/checkListActions";

axios.defaults.baseURL = "https://make-it-habit-api.herokuapp.com";
axios.defaults.headers.common.Authorization = "";

const getHabitsOperation = () => dispatch => {
  console.log("hellooo from operation");
  // console.log("token", token);
  // dispatch(checkListActions.getHabitsRequest());
  axios
    .get("/habits")
    .then(responce => {
      console.log("responce :", responce);
      dispatch(checkListActions.getHabitsSuccess(responce.data.habits));
    })
    .catch(error => console.log(error));
};

// const getHabitsOperation = () = (dispatch) => {
//     dispatch(actions.getHabitsRequest())
//     axios.get("/habits")
//         .then(res => {
//             console.log('res', res)
//             dispatch(actions.getHabitsSuccess([...res]))
//             .catch(error=>console.log('ERROR', error))
//         })
// }

export default { getHabitsOperation };
