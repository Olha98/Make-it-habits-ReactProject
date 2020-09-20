import ACHIEVEMENT_SUCCESS from '../constants/achievementConstans';

const initialState = [
  {
    name: 'oneCigaretteRefusal',
    status: false,
    quantityCigarette: 1,
  },

  {
    name: 'threeCigaretteRefusal',
    status: false,
    quantityCigarette: 3,
  },

  {
    name: 'fiveCigaretteRefusal',
    status: false,
    quantityCigarette: 5,
  },

  {
    name: 'oneDayCigaretteRefusal',
    status: false,
    quantityDays: 1,
  },

  {
    name: 'theeDayCigaretteRefusal',
    status: false,
    quantityDays: 3,
  },

  {
    name: 'oneWeekCigaretteRefusal',
    status: false,
    quantityDays: 7,
  },

  {
    name: 'twoWeekCigaretteRefusal',
    status: false,
    quantityDays: 14,
  },

  {
    name: 'oneMonthCigaretteRefusal',
    status: false,
    quantityDays: 30,
  },

  {
    name: 'treeMonthCigaretteRefusal',
    status: false,
    quantityDays: 90,
  },

  {
    name: 'sixMonthCigaretteRefusal',
    status: false,
    quantityDays: 182,
  },

  {
    name: 'oneYearCigaretteRefusal',
    status: false,
    quantityDays: 365,
  },

  {
    name: 'twoYearCigaretteRefusal',
    status: false,
    quantityDays: 730,
  },

  {
    name: 'treeYearCigaretteRefusal',
    status: false,
    quantityDays: 1095,
  },

  {
    name: 'fiveYearCigaretteRefusal',
    status: false,
    quantityDays: 1825,
  },

  {
    name: 'oneHourSave',
    status: false,
    quantityHours: 1,
  },

  {
    name: 'threeHourSave',
    status: false,
    quantityHours: 3,
  },

  {
    name: 'fiveHourSave',
    status: false,
    quantityHours: 5,
  },
];

const achievementsReducer = (state = [...initialState], { type, payload }) => {
  switch (type) {
    case ACHIEVEMENT_SUCCESS:
      return state;

    default:
      return state;
  }
};

export default achievementsReducer;
