import axios from "axios";
import leftSideBarAction from "../actions/leftSideBarActions";

axios.defaults.baseURL = "https://make-it-habit-api.herokuapp.com";
axios.defaults.headers.common.Authorization =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNWYzOTk2YzEyMDY3MDAxN2Q5NDA1OSIsImlhdCI6MTYwMDA4MjEwNSwiZXhwIjoxNjAwNjg2OTA1fQ.ZJ6D6WOT-ym-ZjcodwuDzzkAkr21qv-MwQVGLef5fcs";

// export const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = "";
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };
const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken }
  } = getState();
  if (!persistedToken) {
    return;
  }
  // token.set(persistedToken);
  dispatch(leftSideBarAction.getCurrentUserStart());
  try {
    const response = await axios.get("/habits");
    dispatch(leftSideBarAction.getCurrentUserSuccess(response.data));
    console.log("response.data", response.data);
  } catch (error) {
    dispatch(leftSideBarAction.getCurrentUserError(error));
  }
};

const logout = () => async dispatch => {
  dispatch(leftSideBarAction.logoutStart());

  try {
    await axios.post("users/logout");

    // token.unset();
    dispatch(leftSideBarAction.logoutSuccess());
  } catch (error) {
    dispatch(leftSideBarAction.logoutError(error.message));
  }
};
export default { getCurrentUser, logout };
