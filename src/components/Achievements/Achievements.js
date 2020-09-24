import React, { useEffect } from 'react';

import style from './Achievements.module.css';
import AchievementsHeader from './AchievementsHeader/AchievementsHeader';
import achievementAction from '../../redux/actions/achievementAction';
import { connect } from 'react-redux';

// const getActiveClass = achievements => {
//   return achievements.some(
//     achievement =>
//       achievement.name === 'oneDayCigaretteRefusal' && achievement.status,
//   );
// };

const Achievements = ({
  achievements,
  achievementAction,
  smokedCigarettes,
  quizInfoPerDay,
  quizInfoPerTime,
}) => {
  // console.log(achievements);

  console.log('ghi', smokedCigarettes, quizInfoPerDay, quizInfoPerTime);

  useEffect(() => {
    if (smokedCigarettes.data === []) {
      smokedCigarettes.data.push(null);
    }

    achievementAction({
      smokedCigarettes,
      quizInfoPerDay,
      quizInfoPerTime,
    });
  }, []);

  return (
    <>
      <AchievementsHeader />
      <div className={style.achievementsContainer}>
        <ul className={style.achievementsPageList}>
          {achievements.map(achievement => (
            <li
              key={achievement.name}
              className={
                achievement.status
                  ? style.activeClass
                  : style.achievementsPageItem
              }
            >
              {/* {console.log(achievement.status)} */}
              <p className={style.achievementsPageText}>{achievement.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    achievements: state.achievement,
    smokedCigarettes: state.cigarettes.data,
    quizInfoPerDay: state.quizInfo.cigarettePerDay,
    quizInfoPerTime: state.quizInfo.cigarettePerTime,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    achievementAction: data => dispatch(achievementAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Achievements);
