import dailyResultConstans from "../constants/dailyResultConstant";

const dayInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case dailyResultConstans.UPDATE_CIGGARETES_SUCCESS:
      return { ...state };

    default:
      return state;
  }
};

export default dayInfoReducer;
