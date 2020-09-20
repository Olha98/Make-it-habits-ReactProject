import { GET_USER_DATA } from "../constants/userConstants";

export const getUserData = userData => {
    return {
        type: GET_USER_DATA,
        payload: userData,
    };
};