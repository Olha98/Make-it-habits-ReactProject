import customHabitConstans from '../constants/castomHabitConstans';

const addCustomHabit = habit => {
    return {
      type: customHabitConstans.ADD_CUSTOM_HABIT,
      payload: {
        ...habit,
    }
  }
}

const removeCustomHabit = id => {
  return {
    type: customHabitConstans.REMOVE_CUSTOM_HABIT,
    payload: id
  }
}




export default {addCustomHabit, removeCustomHabit}