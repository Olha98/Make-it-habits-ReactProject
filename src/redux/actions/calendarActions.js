import calendarConstants from "../constants/calendarConstants";

const getHabitsRequest = () => ({
  type: calendarConstants.GET_HABITS_REQUEST,
});

const getHabitsSuccess = (habits) => ({
  type: calendarConstants.GET_HABITS_SUCCESS,
  payload: habits,
});

const getHabitsError = (error) => ({
  type: calendarConstants.GET_HABITS_ERROR,
  payload: error,
});

export default { getHabitsRequest, getHabitsSuccess, getHabitsError};
