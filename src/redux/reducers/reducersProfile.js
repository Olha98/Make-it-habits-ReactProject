// import actionsProfile from "../actions/actionsProfile";
import constTypes from "../constants/constProfile";

const dataUserReduser = (state = [], { type, payload }) => {
  switch (type) {
    case constTypes.GET_DATA_USER_SUCCESS:
      return payload;

    case constTypes.ADD_DATA_USER_SUCCESS:
      return [...state, payload];

    default:
      return state;
  }
};

export default dataUserReduser;
