import ACHIEVEMENT_SUCCESS from '../constants/achievementConstans';

const initialState = [
  {
    name: 'oneCigaretteRefusal',
    status: false,
    quantityCigarette: 1,
    text: 'Отказ от 1 сигареты',
  },

  {
    name: 'threeDayCigaretteRefusal',
    status: false,
    quantityCigarette: 3,
    text: 'Отказ от 3-х сигарет',
  },

  {
    name: 'fiveCigaretteRefusal',
    status: false,
    quantityCigarette: 5,
    text: 'Отказ от 5-ти сигарет',
  },

  {
    name: 'oneDayCigaretteRefusal',
    status: false,
    quantityDays: 1,
    text: 'Один день без сигарет',
  },

  {
    name: 'theeDayCigaretteRefusal',
    status: false,
    quantityDays: 3,
    text: 'Три день без сигарет',
  },

  {
    name: 'oneWeekCigaretteRefusal',
    status: false,
    quantityDays: 7,
    text: 'Одна неделя без сигарет',
  },

  {
    name: 'twoWeekCigaretteRefusal',
    status: false,
    quantityDays: 14,
    text: 'Две недели без сигарет',
  },

  {
    name: 'oneMonthCigaretteRefusal',
    status: false,
    quantityDays: 30,
    text: 'Один месяц без сигарет',
  },

  {
    name: 'treeMonthCigaretteRefusal',
    status: false,
    quantityDays: 90,
    text: 'Три месяца без сигарет',
  },

  {
    name: 'sixMonthCigaretteRefusal',
    status: false,
    quantityDays: 182,
    text: 'Шесть месяцев без сигарет',
  },

  {
    name: 'oneYearCigaretteRefusal',
    status: false,
    quantityDays: 365,
    text: 'Один год без сигарет',
  },

  {
    name: 'twoYearCigaretteRefusal',
    status: false,
    quantityDays: 730,
    text: 'Два года без сигарет',
  },

  {
    name: 'treeYearCigaretteRefusal',
    status: false,
    quantityDays: 1095,
    text: 'Три года без сигарет',
  },

  {
    name: 'fiveYearCigaretteRefusal',
    status: false,
    quantityDays: 1825,
    text: 'Пять лет без сигарет',
  },

  {
    name: 'oneHourSave',
    status: false,
    quantityHours: 1,
    text: 'Сохранил 1 час',
  },

  {
    name: 'threeHourSave',
    status: false,
    quantityHours: 3,
    text: 'Сохранил 3 часа',
  },

  {
    name: 'fiveHourSave',
    status: false,
    quantityHours: 5,
    text: 'Сохранил 5 часов',
  },
];

const getAchievements = (state, payload) => {
  let newState = [...state];
  if (payload.smokedCigarettes.data.some(cigarette => cigarette === 0)) {
    console.log('1 day');
    newState = newState.map(achievement =>
      achievement.name === 'oneDayCigaretteRefusal'
        ? { ...achievement, status: true }
        : achievement,
    );
  }
  // console.log(payload.quizInfoPerDay);
  if (
    payload.smokedCigarettes.data.some(
      cigarette => cigarette <= Number(payload.quizInfoPerDay) - 5,
    )
  ) {
    console.log('3 day');
    newState = newState.map(achievement =>
      achievement.name === 'fiveCigaretteRefusal'
        ? { ...achievement, status: true }
        : achievement,
    );
  }
  console.log(newState);
  return newState;
};

const achievementsReducer = (state = [...initialState], { type, payload }) => {
  switch (type) {
    case ACHIEVEMENT_SUCCESS:
      // console.log(payload);

      return getAchievements(state, payload);

    default:
      return state;
  }
};

export default achievementsReducer;
