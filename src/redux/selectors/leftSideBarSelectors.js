import { createSelector } from 'reselect';

// const getConstAmountOfCigarettesPerDay = state =>
//   state.quizInfo.cigarettePerDay;

const getConstAmountOfCigarettesPerDay = state => {
  // console.log('state', state);
  return state.quizInfo?.cigarettePerDay;
};
const getCigarettePackPrice = state => {
  return state.quizInfo.cigarettePackPrice;
};

const getCurrentAmountOfCigarettes = state =>
  state.cigarettes.data[state.cigarettes.data.length - 1];

const getTimeForOneCigarette = state => state.quizInfo.cigarettePerTime;

// ===============habits========

const listOfHabits = state => state.habits.allHabits;

const getHabitById = (state, habitId) => {
  const habits = listOfHabits(state);
  return habits.find(habit => habit._id === habitId);
};

const allNotifications = createSelector([listOfHabits], habits => {
  // console.log('habits', habits);

  return (
    habits &&
    habits.filter(habit => {
      //const isAllTrue = habit.data.every(bool => bool);

      if (habit.efficiency === 100) {
        console.log('data', habit.name);
        return [...habit.name];
      }
      return '';
    })
  );
  // return (
  //   habits &&
  //   habits.filter(({ data, name, }) => {
  //     const isAllTrue = data.every(bool => bool);

  //     if (isAllTrue) {
  //       console.log('data', data);
  //       return {
  //         [name]: data,
  //       };
  //     }
  //     return '';
  //   })
  // );
});
// ===============habits=========
export default {
  allNotifications,
  getConstAmountOfCigarettesPerDay,
  getCigarettePackPrice,
  getCurrentAmountOfCigarettes,
  getTimeForOneCigarette,
  listOfHabits,
  getHabitById,
};
