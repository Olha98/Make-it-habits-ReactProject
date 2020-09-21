import customHabitConstans from '../constants/castomHabitConstans';

const removeCustomHabit = habitId => {
  return {
    type: customHabitConstans.REMOVE_CUSTOM_HABIT,
    payload: habitId
  }
}

const patchHabitStatus = habit => {
  return {
    type: customHabitConstans.PATCH_CUSTOM_HABIT,
    payload: {
      ...habit
    }
  };
};

const addCustomHabit = habit => {
  return {
    type: customHabitConstans.ADD_CUSTOM_HABIT,
    payload: {
      ...habit,
    }
  }
}




  export default {
    addCustomHabit,
    removeCustomHabit,
    patchHabitStatus
  }