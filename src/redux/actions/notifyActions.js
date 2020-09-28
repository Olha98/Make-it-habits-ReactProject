import notifyConstants from '../constants/notifyConstants';

const addDoneHabits = array => ({
  type: notifyConstants.NOTIFY_ADD,
  payload: array,
});

const clearDoneHabits = () => ({
  type: notifyConstants.NOTIFY_CLEAR,
});

const addOneHabit = doneHabit => ({
  //   return console.log('doneHabit', doneHabit);
  type: notifyConstants.NOTIFY_ONE_HABIT,
  payload: doneHabit,
});

export default {
  addDoneHabits,
  clearDoneHabits,
  addOneHabit,
};
