import checkListConstants from "../constants/checkListConstants";
const getHabitsRequest = () => ({
  type: checkListConstants.GET_HABITS_REQUEST
});

const getHabitsSuccess = habits => ({
  type: checkListConstants.GET_HABITS_SUCCESS,
  payload: habits
});

const getHabitsError = error => ({
  type: checkListConstants.GET_HABITS_ERROR,
  payload: error
});

const addHabitStatusRequest = _id => ({
  type: checkListConstants.ADD_HABIT_STATUS_REQUEST,
  payload: _id
});

const addHabitStatusSuccess = habit => {
  return {
    type: checkListConstants.ADD_HABIT_STATUS_SUCCESS,
    payload: {
      ...habit
    }
  };
};

const addHabitStatusError = error => ({
  type: checkListConstants.ADD_HABIT_STATUS_ERROR,
  payload: error
});

// const removeCustomHabit = habitId => {
//   return {
//     type: checkListConstants.REMOVE_CUSTOM_HABIT,
//     payload: habitId
//   }
// }

// const patchHabitStatus = habit => {
//   return {
//     type: checkListConstants.PATCH_CUSTOM_HABIT,
//     payload: {
//       ...habit
//     }
//   };
// };

// const addCustomHabit = habit => {
//     return {
//       type: customHabitConstans.ADD_CUSTOM_HABIT,
//       payload: {
//         ...habit,
//     }
//   }
// }

export default {
  getHabitsRequest,
  getHabitsSuccess,
  getHabitsError,
  addHabitStatusRequest,
  addHabitStatusSuccess,
  addHabitStatusError,
};
