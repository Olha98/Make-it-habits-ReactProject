import ACHIEVEMENT_SUCCESS from '../constants/achievementConstans';
import constants from '../constants/authConstans';

const initialState = [
  {
    name: 'oneCigaretteRefusal',
    status: false,
    text: 'Отказ от 1 сигареты',
  },

  {
    name: 'threeCigaretteRefusal',
    status: false,
    text: 'Отказ от 3 сигарет',
  },

  {
    name: 'fiveCigaretteRefusal',
    status: false,
    text: 'Отказ от 5 сигарет',
  },

  {
    name: 'oneDayCigaretteRefusal',
    status: false,
    text: 'Не курю 1 день',
  },

  {
    name: 'threeDayCigaretteRefusal',
    status: false,
    text: 'Не курю 3 дня',
  },

  {
    name: 'oneWeekCigaretteRefusal',
    status: false,
    text: 'Не курю 1 неделю',
  },

  {
    name: 'twoWeekCigaretteRefusal',
    status: false,
    text: 'Не курю 2 недели',
  },

  {
    name: 'oneMonthCigaretteRefusal',
    status: false,
    text: 'Не курю 1 месяц',
  },

  {
    name: 'threeMonthCigaretteRefusal',
    status: false,
    text: 'Не курю 3 месяца',
  },

  {
    name: 'sixMonthCigaretteRefusal',
    status: false,
    text: 'Не курю 6 месяцев',
  },

  {
    name: 'oneYearCigaretteRefusal',
    status: false,
    text: 'Не курю 1 год',
  },

  {
    name: 'twoYearCigaretteRefusal',
    status: false,
    text: '2 года без сигарет',
  },

  {
    name: 'threeYearCigaretteRefusal',
    status: false,
    text: '3 года без сигарет',
  },

  {
    name: 'fiveYearCigaretteRefusal',
    status: false,
    text: 'Уже 5. Дай пять!',
  },

  {
    name: 'oneHourSave',
    status: false,
    text: 'Сохранил 1 час',
  },

  {
    name: 'threeHourSave',
    status: false,
    text: 'Сохранил 3 часа',
  },

  {
    name: 'fiveHourSave',
    status: false,
    text: 'Сохранил 5 часов',
  },

  {
    name: 'tenHourSave',
    status: false,
    text: 'Сохранил 10 часов',
  },
];

const getAchievements = (state, payload) => {
  let newState = [...state];

  if (
    payload.smokedCigarettes.data
      .filter(element => element !== null)
      .some(cigarette => cigarette <= Number(payload.quizInfoPerDay) - 1)
  ) {
    newState = newState.map(achievement =>
      achievement.name === 'oneCigaretteRefusal'
        ? { ...achievement, status: true }
        : achievement,
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter(element => element !== null)
      .some(cigarette => cigarette <= Number(payload.quizInfoPerDay) - 3)
  ) {
    newState = newState.map(achievement =>
      achievement.name === 'threeCigaretteRefusal'
        ? { ...achievement, status: true }
        : achievement,
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter(element => element !== null)
      .some(cigarette => cigarette <= Number(payload.quizInfoPerDay) - 5)
  ) {
    newState = newState.map(achievement =>
      achievement.name === 'fiveCigaretteRefusal'
        ? { ...achievement, status: true }
        : achievement,
    );
  }
  if (payload.smokedCigarettes.data.some(cigarette => cigarette === 0)) {
    newState = newState.map(achievement =>
      achievement.name === 'oneDayCigaretteRefusal'
        ? { ...achievement, status: true }
        : achievement,
    );
  }
  if (
    payload.smokedCigarettes.data
      .filter(element => element !== null)
      .filter(element => element === 0).length >= 3
  ) {
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

  if (
    payload.smokedCigarettes.data
      .filter(element => element !== null)
      .filter(element => element === 0).length >= 14
  ) {
    newState = newState.map(achievement =>
      achievement.name === 'twoWeekCigaretteRefusal'
        ? { ...achievement, status: true }
        : achievement,
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter(element => element !== null)
      .filter(element => element === 0).length >= 30
  ) {
    newState = newState.map(achievement =>
      achievement.name === 'oneMonthCigaretteRefusal'
        ? { ...achievement, status: true }
        : achievement,
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter(element => element !== null)
      .filter(element => element === 0).length >= 90
  ) {
    newState = newState.map(achievement =>
      achievement.name === 'threeMonthCigaretteRefusal'
        ? { ...achievement, status: true }
        : achievement,
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter(element => element !== null)
      .filter(element => element === 0).length >= 182
  ) {
    newState = newState.map(achievement =>
      achievement.name === 'sixMonthCigaretteRefusal'
        ? { ...achievement, status: true }
        : achievement,
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter(element => element !== null)
      .filter(element => element === 0).length >= 365
  ) {
    newState = newState.map(achievement =>
      achievement.name === 'oneYearCigaretteRefusal'
        ? { ...achievement, status: true }
        : achievement,
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter(element => element !== null)
      .filter(element => element === 0).length >= 730
  ) {
    newState = newState.map(achievement =>
      achievement.name === 'twoYearCigaretteRefusal'
        ? { ...achievement, status: true }
        : achievement,
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter(element => element !== null)
      .filter(element => element === 0).length >= 1095
  ) {
    newState = newState.map(achievement =>
      achievement.name === 'threeYearCigaretteRefusal'
        ? { ...achievement, status: true }
        : achievement,
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter(element => element !== null)
      .filter(element => element === 0).length >= 1825
  ) {
    newState = newState.map(achievement =>
      achievement.name === 'fiveYearCigaretteRefusal'
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

  if (
    payload.smokedCigarettes.data
      .filter(element => element !== null)
      .reduce((acc, cigarette) => {
        acc += Number(payload.quizInfoPerDay) - cigarette;
        return acc;
      }, 0) *
      (payload.quizInfoPerTime / 60) >=
    5
  ) {
    newState = newState.map(achievement =>
      achievement.name === 'fiveHourSave'
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
    5
  ) {
    newState = newState.map(achievement =>
      achievement.name === 'tenHourSave'
        ? { ...achievement, status: true }
        : achievement,
    );
  }

  return newState;
};

const achievementsReducer = (
  state = [...initialState],
  { type, payload = [] },
) => {
  const values = Object.entries(payload);
  switch (type) {
    case ACHIEVEMENT_SUCCESS:
      return getAchievements(state, payload);
    case constants.LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default achievementsReducer;
