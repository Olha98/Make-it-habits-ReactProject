import customHabitConstans from "../constants/castomHabitConstans";

const habitReducer = (state = [], action) => {
  switch (action.type) {
    case customHabitConstans.ADD_CUSTOM_HABIT_NAME:
      return [...state, action.payload];

    // case customHabitConstans.ADD_CUSTOM_HABIT_STARTDATE:
    //   return [...state, action.payload];

    default:
      return state;
  }
};

export default habitReducer;
