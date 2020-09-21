import { array } from 'yup';
import ACHIEVEMENT_SUCCESS from '../constants/achievementConstans';

const initialState = [
  {
    name: 'oneCigaretteRefusal',
    status: false,
    quantityCigarette: 1,
    text: 'Отказ от 1 сигареты',
  },

  {
    name: 'threeCigaretteRefusal',
    status: false,
    quantityCigarette: 3,
    text: 'Отказ от 3 сигарет',
  },

  {
    name: 'fiveCigaretteRefusal',
    status: false,
    quantityCigarette: 5,
    text: 'Отказ от 5 сигарет',
  },

  {
    name: 'oneDayCigaretteRefusal',
    status: false,
    quantityDays: 1,
    text: 'Не курю 1 день',
  },

  {
    name: 'threeDayCigaretteRefusal',
    status: false,
    quantityDays: 3,
    text: 'Не курю 3 дня',
  },

  {
    name: 'oneWeekCigaretteRefusal',
    status: false,
    quantityDays: 7,
    text: 'Не курю 1 неделю',
  },

  {
    name: 'twoWeekCigaretteRefusal',
    status: false,
    quantityDays: 14,
    text: 'Не курю 2 недели',
  },

  {
    name: 'oneMonthCigaretteRefusal',
    status: false,
    quantityDays: 30,
    text: 'Не курю 1 месяц',
  },

  {
    name: 'threeMonthCigaretteRefusal',
    status: false,
    quantityDays: 90,
    text: 'Не курю 3 месяца',
  },

  {
    name: 'sixMonthCigaretteRefusal',
    status: false,
    quantityDays: 182,
    text: 'Не курю 6 месяцев',
  },

  {
    name: 'oneYearCigaretteRefusal',
    status: false,
    quantityDays: 365,
    text: 'Не курю 1 год',
  },

  {
    name: 'twoYearCigaretteRefusal',
    status: false,
    quantityDays: 730,
    text: '2 года без сигарет',
  },

  {
    name: 'threeYearCigaretteRefusal',
    status: false,
    quantityDays: 1095,
    text: '3 года без сигарет',
  },

  {
    name: 'fiveYearCigaretteRefusal',
    status: false,
    quantityDays: 1825,
    text: 'Уже 5. Дай пять!',
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

  // ================= CIGARETTES =================

  if (
    payload.smokedCigarettes.data
      .filter(element => element !== null)
      .some(
        cigarette => cigarette <= Number(payload.quizInfoPerDay) - 1,
        // console.log('payload.quizInfoPerDay', Number(payload.quizInfoPerDay))
      )
  ) {
    // console.log('1 day');
    newState = newState.map(achievement =>
      achievement.name === 'oneCigaretteRefusal'
        ? { ...achievement, status: true }
        : achievement,
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter(element => element !== null)
      .some(
        cigarette => cigarette <= Number(payload.quizInfoPerDay) - 3,
        // console.log('payload.quizInfoPerDay', Number(payload.quizInfoPerDay))
      )
  ) {
    // console.log('1 day');
    newState = newState.map(achievement =>
      achievement.name === 'threeCigaretteRefusal'
        ? { ...achievement, status: true }
        : achievement,
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter(element => element !== null)
      .some(
        cigarette => cigarette <= Number(payload.quizInfoPerDay) - 5,
        // console.log('payload.quizInfoPerDay', Number(payload.quizInfoPerDay))
      )
  ) {
    // console.log('1 day');
    newState = newState.map(achievement =>
      achievement.name === 'fiveCigaretteRefusal'
        ? { ...achievement, status: true }
        : achievement,
    );
  }

  // console.log(payload.smokedCigarettes.data);
  // console.log(Number(payload.quizInfoPerDay));
  // console.log(payload);

  // ================= DAYS =================

  if (payload.smokedCigarettes.data.some(cigarette => cigarette === 0)) {
    // console.log('1 day');
    newState = newState.map(achievement =>
      achievement.name === 'oneDayCigaretteRefusal'
        ? { ...achievement, status: true }
        : achievement,
    );
  }
  // console.log(
  //   payload.smokedCigarettes.data
  //     .filter(element => element !== null)
  //     .filter(element => element === 0),
  // );
  if (
    payload.smokedCigarettes.data
      .filter(element => element !== null)
      .filter(element => element === 0).length >= 3
  ) {
    // console.log('1 day');
    newState = newState.map(achievement =>
      achievement.name === 'threeDayCigaretteRefusal'
        ? { ...achievement, status: true }
        : achievement,
    );
  }
  if (
    payload.smokedCigarettes.data
      .filter(element => element !== null)
      .filter(element => element === 0).length >= 7
  ) {
    newState = newState.map(achievement =>
      achievement.name === 'oneWeekCigaretteRefusal'
        ? { ...achievement, status: true }
        : achievement,
    );
  }

  // ================= HOURS =================
  console.log(
    payload.smokedCigarettes.data
      .filter(element => element !== null)
      .reduce((acc, cigarette) => {
        acc += Number(payload.quizInfoPerDay) - cigarette;
        return acc;
      }, 0) *
      (payload.quizInfoPerTime / 60),
  );
  if (
    payload.smokedCigarettes.data
      .filter(element => element !== null)
      .reduce((acc, cigarette) => {
        acc += Number(payload.quizInfoPerDay) - cigarette;
        return acc;
      }, 0) *
      (payload.quizInfoPerTime / 60) >=
    1
  ) {
    newState = newState.map(achievement =>
      achievement.name === 'oneHourSave'
        ? { ...achievement, status: true }
        : achievement,
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter(element => element !== null)
      .reduce((acc, cigarette) => {
        acc += Number(payload.quizInfoPerDay) - cigarette;
        return acc;
      }, 0) *
      (payload.quizInfoPerTime / 60) >=
    3
  ) {
    newState = newState.map(achievement =>
      achievement.name === 'threeHourSave'
        ? { ...achievement, status: true }
        : achievement,
    );
  }

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
