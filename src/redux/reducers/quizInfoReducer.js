import { combineReducers } from "redux";
import quizInfoConstants from "../constants/quizInfoConstants";

const initialState = {
  smokeYears: 0,
  cigarettePerDay: 0,
  cigarettePerTime: 0,
  cigarettePackPrice: 0,
};

const quizInfo = (state = { ...initialState }, action) => {
  switch (action.type) {
    case quizInfoConstants.ADD_SUCCESS:
      return action.payload;
    case quizInfoConstants.GET_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default quizInfo;
