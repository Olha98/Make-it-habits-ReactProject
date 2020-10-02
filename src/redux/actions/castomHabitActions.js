import customHabitConstans from '../constants/castomHabitConstans';

const removeCustomHabitRequest = () => {
  return {
    type: customHabitConstans.REMOVE_CUSTOM_HABIT_REQUEST,
  };
};

const removeCustomHabit = habitId => {
  return {
    type: customHabitConstans.REMOVE_CUSTOM_HABIT,
    payload: habitId,
  };
};

const removeCustomHabitError = error => {
  return {
    type: customHabitConstans.REMOVE_CUSTOM_HABIT_ERROR,
    payload: error,
  };
};

const patchHabitRequest = () => {
  return {
    type: customHabitConstans.PATCH_CUSTOM_HABIT_REQUEST,
  };
};

const patchHabitStatus = habit => {
  return {
    type: customHabitConstans.PATCH_CUSTOM_HABIT,
    payload: {
      ...habit,
    },
  };
};

const patchHabitError = error => {
  return {
    type: customHabitConstans.PATCH_CUSTOM_HABIT_ERROR,
    payload: error,
  };
};

const addCustomHabitRequest = () => {
  return {
    type: customHabitConstans.ADD_CUSTOM_HABIT_REQUEST,
  };
};

const addCustomHabit = habit => {
  return {
    type: customHabitConstans.ADD_CUSTOM_HABIT,
    payload: habit,
  };
};

const addCustomHabitError = error => {
  return {
    type: customHabitConstans.ADD_CUSTOM_HABIT_ERROR,
    payload: error,
  };
};

export default {
  addCustomHabitRequest,
  addCustomHabit,
  addCustomHabitError,
  removeCustomHabitRequest,
  removeCustomHabit,
  removeCustomHabitError,
  patchHabitRequest,
  patchHabitStatus,
  patchHabitError,
};
