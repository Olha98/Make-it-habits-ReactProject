import customHabitConstans from '../constants/castomHabitConstans';

const addCustomHabit = habit => {
    return {
      type: customHabitConstans.ADD_CUSTOM_HABIT_NAME,
      payload: {
        ...habit,
    }
  }
}

// const addStartDate = habit => {
//     return {
//       type: customHabitConstans.ADD_CUSTOM_HABIT_STARTDATE,
//       payload: {
//         ...habit,
//     }
//   }
// }


export default addCustomHabit