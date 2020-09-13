import axios from "axios";
import leftSideBarAction from "../actions/leftSideBarActions";

axios.defaults.baseURL = "https://api-habit.herokuapp.com";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(leftSideBarAction.getCurrentUserStart());
  try {
    const response = await axios.get("/users/current");
    dispatch(leftSideBarAction.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(leftSideBarAction.getCurrentUserError(error));
  }
};

const logout = () => async (dispatch) => {
  dispatch(leftSideBarAction.logoutStart());

  try {
    await axios.post("users/logout");

    token.unset();
    dispatch(leftSideBarAction.logoutSuccess());
  } catch (error) {
    dispatch(leftSideBarAction.logoutError(error.message));
  }
};
export default { getCurrentUser, logout };
