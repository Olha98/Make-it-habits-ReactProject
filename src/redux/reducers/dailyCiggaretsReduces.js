import dailyResultConstans from "../constants/dailyResultConstant";

const initialState = {
  startedAt: "",
  data: [],
};

const dayInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case dailyResultConstans.UPDATE_CIGGARETES_SUCCESS:
      return { ...action.payload };

    default:
      return state;
  }
};

export default dayInfoReducer
