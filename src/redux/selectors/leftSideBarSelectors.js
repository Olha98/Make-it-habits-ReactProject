import { createSelector } from 'reselect';

const getConstAmountOfCigarettesPerDay = state => {
  return state.quizInfo?.cigarettePerDay;
};
const getCigarettePackPrice = state => {
  return state.quizInfo.cigarettePackPrice;
};

const getCurrentAmountOfCigarettes = state => {
  const cig = state.cigarettes.data.filter(el => el !== null);

  return cig[cig.length - 1];
};
const allCigarettes = state => {
  const cig = state.cigarettes.data.filter(el => el !== null);

  return cig;
};
const getTimeForOneCigarette = state => state.quizInfo.cigarettePerTime;

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

      if (habit.efficiency === 100) {
        return [...habit.name];
      }
      return '';
    })
  );
});

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
