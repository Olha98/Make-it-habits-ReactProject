const getUserData = '@getUserdata/GET';

export const actionsGetUserData = userData => {
  // console.log(userData, 'userDatauserDatauserDatauserDatauserData');

  return {
    type: getUserData,
    payload: userData,
  };
};

const initialState = {
  user: null,
  habits: null,
};

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case getUserData:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
