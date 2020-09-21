import ACHIEVEMENT_SUCCESS from '../constants/achievementConstans';

const quantitySmokedCigarettes = ({
  smokedCigarettes,
  quizInfoPerDay,
  quizInfoPerTime,
}) => {
  return {
    type: ACHIEVEMENT_SUCCESS,
    payload: {
      smokedCigarettes,
      quizInfoPerDay,
      quizInfoPerTime,
      // dateNow: Date.now(),
    },
  };
};

export default quantitySmokedCigarettes;
