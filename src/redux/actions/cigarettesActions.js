import { GET_CIGARETTES } from "../constants/cigarettesInfoConstants";

export const getCigarettes = (cigarettes) => {
   return{
    type: GET_CIGARETTES,
    payload: cigarettes
   } 
}