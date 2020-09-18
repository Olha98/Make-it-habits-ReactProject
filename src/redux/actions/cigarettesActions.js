import { GET_CIGARETTES } from "../constants/cigarettesInfoConstants";

export const getCigarettes = (habits) => ({
    type: GET_CIGARETTES,
    payload: habits
})