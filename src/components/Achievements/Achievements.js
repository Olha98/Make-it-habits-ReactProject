import React from 'react';

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
const Achievements = ({ achievements }) => {
  // achievementStatus({ smokedCigarettes, quizInfoPerDay, quizInfoPerTime });

  return (
    <>
      <AchievementsHeader />
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
    </>
  );
};

const mapStateToProps = state => {
  return {
    achievements: state.achievement,
    // smokedCigarettes: state.cigarettes.data,
    // quizInfoPerDay: state.quizInfo.cigarettePerDay,
    // quizInfoPerTime: state.quizInfo.cigarettePerTime,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    achievementStatus: data => dispatch(achievementAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Achievements);
