import { GET_HABITS } from "../constants/habitsConstants";

export const getHabits = (habits) => ({
    type: GET_HABITS,
    payload: habits
})