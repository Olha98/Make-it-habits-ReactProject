import constType from "../constants/constProfile";

const getDataUserRequest = () => ({
  type: constType.GET_DATA_USER_REQUEST,
});

const getDataUserSuccess = (user) => ({
  type: constType.GET_DATA_USER_SUCCESS,
  paylod: { ...user },
});

const getDataUserError = (error) => ({
  type: constType.GET_DATA_USER_ERROR,
  paylod: error,
});

const addDataUserRequest = (user) => ({
  type: constType.ADD_DATA_USER_REQUEST,
  payload: { ...user },
});

const addDataUserSuccess = (user) => {
  console.log("user", user);
  return {
    type: constType.ADD_DATA_USER_SUCCESS,
    payload: { ...user },
  };
};

const addDataUserError = (error) => ({
  type: constType.ADD_DATA_USER_ERROR,
  paylod: error,
});

export default {
  getDataUserRequest,
  getDataUserSuccess,
  getDataUserError,

  addDataUserRequest,
  addDataUserSuccess,
  addDataUserError,
};
