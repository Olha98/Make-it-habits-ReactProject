import axios from "axios";
import calendarActions from "../actions/calendarActions";
import  actionsLoader from "../actions/spinnerActions"


export const getHabitsOperation = () => (dispatch) => {
  dispatch(actionsLoader.loaderOn());
  dispatch(calendarActions.getHabitsRequest());
  axios
    .get("https://make-it-habit-api.herokuapp.com/habits")
    .then((responce) => {

      dispatch(calendarActions.getHabitsSuccess(responce.data.habits));
    })
	.catch((error) => console.log(error))
	.finally(()=> {dispatch(actionsLoader.loaderOff())})
  }