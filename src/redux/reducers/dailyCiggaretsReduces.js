import dailyResultConstans from "../constants/dailyResultConstant";

const dayInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case dailyResultConstans.UPDATE_CIGGARETES_SUCCESS:
      return { ...action.payload };

    default:
      return state;
  }
};

export default dayInfoReducer;
