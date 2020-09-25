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

// const getCurrentAmountOfCigarettes = state =>
//   state.cigarettes.data[state.cigarettes.data.length - 1];
const getCurrentAmountOfCigarettes = state => {
  const cig = state.cigarettes.data.filter(el => el !== null);

  return cig[cig.length - 1];
  //console.log('cig', cig[cig.length - 1]);
};
const allCigarettes = state => {
  const cig = state.cigarettes.data.filter(el => el !== null);

  return cig;
};
const getTimeForOneCigarette = state => state.quizInfo.cigarettePerTime;

// ===============habits========
const listOfHabits = state => state.habits.allHabits;
const listOfHabitsCurrent = state => state.habits.currentHabits;

const getHabitById = (state, habitId) => {
  const habits = listOfHabits(state);
  return habits.find(habit => habit._id === habitId);
};

const allNotifications = createSelector([listOfHabitsCurrent], habits => {
  return (
    habits &&
    habits.filter(habit => {
      //const isAllTrue = habit.data.every(bool => bool);

      if (habit.efficiency === 100) {
        // console.log('data', habit.name);
        return [...habit.name];
      }
      return '';
    })
  );
});
// ===============habits=========
export default {
  allCigarettes,
  allNotifications,
  getConstAmountOfCigarettesPerDay,
  getCigarettePackPrice,
  getCurrentAmountOfCigarettes,
  getTimeForOneCigarette,
  listOfHabits,
  getHabitById,
  listOfHabitsCurrent,
};
