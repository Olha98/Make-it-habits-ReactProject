import { createSelector } from 'reselect';

const getConstAmountOfCigarettesPerDay = state => {
  console.log('state', state);
  return state.user?.user?.quizInfo?.cigarettePerDay;
};
const getCigarettePackPrice = state => {
  return state.user?.user?.quizInfo?.cigarettePackPrice;
};

const getCurrentAmountOfCigarettes = state =>
  state.dayInfo.data[state.dayInfo.data.length - 1];
//state.user?.user?.cigarettes?.data[state.user.cigarettes.data.length - 1];

const getTimeForOneCigarette = state =>
  state.user?.user?.quizInfo.cigarettePerTime;

// ===============habits=========

const listOfHabits = state => state.user?.habits;

const getHabitById = (state, habitId) => {
  const habits = listOfHabits(state);
  return habits.find(habit => habit._id === habitId);
};

const allNotifications = createSelector([listOfHabits], habits => {
  // console.log('habits', habits);

  return (
    habits &&
    habits.filter(({ data, name }) => {
      const isAllTrue = data.every(bool => bool);

      if (isAllTrue) {
        return {
          [name]: data.name,
        };
      }
      return '';
    })
  );
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
