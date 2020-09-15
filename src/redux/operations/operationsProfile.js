import axios from "axios";
import actionsUser from "../actions/actionsProfile";
import actionsLoader from "../actions/spinnerActions";

// axios.defaults.headers.common.Authorization =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNWYzOTk2YzEyMDY3MDAxN2Q5NDA1OSIsImlhdCI6MTYwMDA4MjEwNSwiZXhwIjoxNjAwNjg2OTA1fQ.ZJ6D6WOT-ym-ZjcodwuDzzkAkr21qv-MwQVGLef5fcs";

const addDataUserOperation = (user) => (dispatch) => {
  dispatch(actionsLoader.loaderOn());
  try {
    const result = axios.post(
      "https://make-it-habit-api.herokuapp.com/habits",
      user
    );
    dispatch(
      actionsUser.addDataUserSuccess({
        ...user,
        id: result.user.id,
      })
    );
  } catch (error) {
    console.log("error-add", error);
    dispatch(actionsUser.addDataUserError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

const getDataUserOperation = (user) => (dispatch) => {
  dispatch(actionsLoader.loaderOn());
  try {
    const result = axios.post(
      "https://make-it-habit-api.herokuapp.com/habits",
      user
    );
    dispatch(
      actionsUser.addDataUserSuccess({
        ...user,
        id: result.user.id,
      })
    );
  } catch (error) {
    console.log("error-add", error);
    dispatch(actionsUser.getDataUserError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

export default { addDataUserOperation, getDataUserOperation };
