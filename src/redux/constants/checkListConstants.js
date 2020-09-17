const GET_HABITS_REQUEST = "@checklist/getHabitsRequest";
const GET_HABITS_SUCCESS = "@checklist/getHabitsSuccess";
const GET_HABITS_ERROR = "@checklist/getHabitsError";

const ADD_HABIT_STATUS_REQUEST = "@checklist/addHabitStatusRequest";
const ADD_HABIT_STATUS_SUCCESS = "@checklist/addHabitStatusSuccess";
const ADD_HABIT_STATUS_ERROR = "@checklist/addHabitStatusError";

const REMOVE_CUSTOM_HABIT = "@customHabit/removeCastomHabit";
const PATCH_CUSTOM_HABIT = "@customHabit/patchCastomHabit";

export default {
  GET_HABITS_REQUEST,
  GET_HABITS_SUCCESS,
  GET_HABITS_ERROR,

  ADD_HABIT_STATUS_REQUEST,
  ADD_HABIT_STATUS_SUCCESS,
  ADD_HABIT_STATUS_ERROR,

  REMOVE_CUSTOM_HABIT,
  PATCH_CUSTOM_HABIT,
};
