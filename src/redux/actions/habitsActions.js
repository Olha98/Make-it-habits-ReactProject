import { GET_HABITS, GET_CURRENT_HABITS } from '../constants/habitsConstants';

export const getHabits = habits => ({
  type: GET_HABITS,
  payload: habits,
});

export const getCurrentHabits = habits => {
  return {
    type: GET_CURRENT_HABITS,
    payload: habits,
  };
};
