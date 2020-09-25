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
    },
  };
};

export default quantitySmokedCigarettes;
