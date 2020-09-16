const getUserData = "@getUserdata/GET";

 export const actionsGetUserData = (userData) => {
   console.log('userData', userData)
   return {
  type: getUserData,
  payload: { ...userData },
}};

export default (state = {}, action) => {
  switch (action.type) {
    case getUserData:
      return {...action.payload };

    default:
      return state;
  }
};
