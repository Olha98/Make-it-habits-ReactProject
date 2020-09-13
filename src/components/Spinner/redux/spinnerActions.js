import constantsTypes from "./constantsTypes";

const loaderOn = () => ({
  type: constantsTypes.LOADER_ON,
});

const loaderOff = () => ({
  type: constantsTypes.LOADER_OFF,
});

export default {
  loaderOn,
  loaderOff,
};
