import constants from '../constants/calendarConstants'

export const calendarReducer = (state = [], action) => {
	console.log(action.payload)
	switch (action.type) {
	  case constants.ADD_ACTUAL_HABITS_CALENDAR:
		return action.payload;
  
	  default:
		return state;
	}
  };
  
