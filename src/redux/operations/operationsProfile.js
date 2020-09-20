import axios from 'axios';
import actionsProfile from '../actions/actionsProfile';
import actionsUser from '../actions/actionsProfile';
import { actionsGetUserData } from '../actions/dataUser';
import actionsLoader from '../actions/spinnerActions';
import { token } from './authOperation';

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

// const getDataUserOperation = () => async (dispatch, getState) => {
//   const tokenNow = getState().auth.access_token;
//   console.log(tokenNow, 'tokenNow');

//   dispatch(actionsLoader.loaderOn());
//   try {
//     token.set(tokenNow);
//     const data = await axios.get('/habits');
//     console.log('data-Get', data.data.user);
//     dispatch(
//       actionsUser.getDataUserSuccess(data.data.user),
//       console.log('data-habits', data.data.user),
//     );
//   } catch (error) {
//     console.log('error-add', error);
//     dispatch(actionsUser.getDataUserError(error));
//   } finally {
//     dispatch(actionsLoader.loaderOff());
//   }
// };

const addDataUserOperation = user => async (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);

  dispatch(actionsLoader.loaderOn());
  try {
    const { data } = await axios.patch('/users', user);
    // console.log('data-Add', data);
    dispatch(
      actionsGetUserData({
        ...data,
      }),
    );
  } catch (error) {
    // console.log('error-add', error);
    dispatch(actionsUser.addDataUserError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

const postPasswordOperation = password => async (dispatch, getState) => {
  const tokenNow = getState().auth.access_token;
  token.set(tokenNow);

  dispatch(actionsLoader.loaderOn());
  try {
    const { data } = await axios.post('/auth/updatePassword', password);
    // console.log('dataPassWord', data);
    dispatch(actionsUser.postPasswordSuccess({ ...password }));
  } catch (error) {
    dispatch(actionsProfile.postPasswordError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

export default { addDataUserOperation, postPasswordOperation };
