const getConstAmountOfCigarettesPerDay = (state) =>
  state.quizInfo.cigarettePerDay;

const getCigarettePackPrice = (state) => {
  return state.quizInfo.cigarettePackPrice;
};

const getCurrentAmountOfCigarettes = (state) => state.dayInfo.cigaretteQuantity;

const getTimeForOneCigarette = (state) => state.quizInfo.cigarettePerTime;

export default {
  getConstAmountOfCigarettesPerDay,
  getCigarettePackPrice,
  getCurrentAmountOfCigarettes,
  getTimeForOneCigarette,
};
