import axios from 'axios';
import actionsUser from '../actions/actionsProfile';
import actionsLoader from '../actions/spinnerActions';

// const instance = axios.create({
//   baseURL: "https://make-it-habit-api.herokuapp.com",
//   headers: {
//     Authorization:
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNWYzOTk2YzEyMDY3MDAxN2Q5NDA1OSIsImlhdCI6MTYwMDE2NjQzMiwiZXhwIjoxNjAwNzcxMjMyfQ.qQ77kpKwqrJN8VQCfMSR0zrV9DVhWUKcNjIxES3Bi4w",
//   },
// });

// axios.defaults.headers.common.Authorization =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNWYzOTk2YzEyMDY3MDAxN2Q5NDA1OSIsImlhdCI6MTYwMDE2NjQzMiwiZXhwIjoxNjAwNzcxMjMyfQ.qQ77kpKwqrJN8VQCfMSR0zrV9DVhWUKcNjIxES3Bi4w";

// axios.defaults.baseURL = "https://make-it-habit-api.herokuapp.com";
// console.dir(axios);

const getDataUserOperation = () => async dispatch => {
  dispatch(actionsLoader.loaderOn());
  try {
    const data = await axios.get('/habits');
    console.log('data-Get', data.data.user);
    dispatch(
      actionsUser.getDataUserSuccess(data.data.user),
      console.log('data-habits', data.data.user),
    );
  } catch (error) {
    console.log('error-add', error);
    dispatch(actionsUser.getDataUserError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

const addDataUserOperation = user => async dispatch => {
  // console.log(111111111, user);
  dispatch(actionsLoader.loaderOn());
  try {
    const { data } = await axios.patch('/users', user);
    console.log('data-Add', data);
    dispatch(
      actionsUser.addDataUserSuccess({
        ...data,
      }),
    );
  } catch (error) {
    console.log('error-add', error);
    dispatch(actionsUser.addDataUserError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

export default { addDataUserOperation, getDataUserOperation };
