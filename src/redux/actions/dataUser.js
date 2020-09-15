const getUserData = "@getUserdata/GET";

 export const actionsGetUserData = (userData) => ({
  type: getUserData,
  payload: { ...userData },
});

export default (state = {}, action) => {
  switch (action.type) {
    case getUserData:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};


