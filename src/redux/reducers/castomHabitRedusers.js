import customHabitConstans from "../constants/castomHabitConstans";

const habitReducer = (state = [], action) => {
  switch (action.type) {
    case customHabitConstans.ADD_CUSTOM_HABIT:
      return [...state, action.payload];
    
    case customHabitConstans.REMOVE_CUSTOM_HABIT:
      return (state, action) => state.filter(habit => habit.id !== action.payload);


    default:
      return state;
  }
};

export default habitReducer;
