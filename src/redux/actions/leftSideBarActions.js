import sidebarActionTypes from '../constants/lefSideBarConstants';
const getDoneHabits = array => ({
  type: sidebarActionTypes.GET_DONE_HABITS,
  payload: array,
});
// const getCurrentUserStart = () => ({
//   type: sidebarActionTypes.GET_CURRENT_USER_START,
// });
// const getCurrentUserSuccess = (user) => ({
//   type: sidebarActionTypes.GET_CURRENT_USER_SUCCESS,
//   payload: { user },
// });
// const getCurrentUserError = (error) => ({
//   type: sidebarActionTypes.GET_CURRENT_USER_ERROR,
//   payload: {
//     error,
//     // error: error.message,
//   },
// });

// const logoutStart = () => ({
//   type: sidebarActionTypes.LOGOUT_START,
// });

// const logoutSuccess = () => ({
//   type: sidebarActionTypes.LOGOUT_SUCCESS,
// });
// const logoutError = (error) => ({
//   type: sidebarActionTypes.LOGOUT_ERROR,
//   payload: {
//     error,
//     // error: error.message,
//   },
// });
export default {
  getDoneHabits,
  // logoutStart,
  // logoutSuccess,
  // logoutError,
  //   getCurrentUserStart,
  //   getCurrentUserSuccess,
  //   getCurrentUserError,
};
