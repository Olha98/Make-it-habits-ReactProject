import axios from 'axios';
import leftSideBarAction from '../actions/leftSideBarActions';

const logout = () => async dispatch => {
  dispatch(leftSideBarAction.logoutStart());

  try {
    await axios.post('users/logout');

    // token.unset();
    dispatch(leftSideBarAction.logoutSuccess());
  } catch (error) {
    dispatch(leftSideBarAction.logoutError(error.message));
  }
};
export default logout;
