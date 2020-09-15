const getUserData = "@getUserdata/GET";

const actionsGetUserData = (userData) => ({
  type: getUserData,
  paylod: { ...userData },
});

export default (state = {}, action) => {
  switch (action.type) {
    case getUserData:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
