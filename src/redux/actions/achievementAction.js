import ACHIEVEMENT_SUCCESS from '../constants/achievementConstans';

const quantitySmokedCigarettes = data => {
  return {
    type: ACHIEVEMENT_SUCCESS,
    payload: {
      data,
      dateNow: Date.now(),
    },
  };
};

export default quantitySmokedCigarettes;
