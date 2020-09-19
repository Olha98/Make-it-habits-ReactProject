import calendarConstants from "../constants/calendarConstants";

const addActualHabitsCalendar = (currentHabits) => ({
  type: calendarConstants.ADD_ACTUAL_HABITS_CALENDAR,
  payload: currentHabits
});


export default  addActualHabitsCalendar;
