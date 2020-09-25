import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AchievementsHeader from './AchievementsHeader/AchievementsHeader';
import achievementAction from '../../redux/actions/achievementAction';
import Spinner from '../Spinner/Spinner';
import { spinnerSelector } from '../../redux/selectors';
import style from './Achievements.module.css';

const Achievements = ({
  achievements,
  achievementAction,
  smokedCigarettes,
  quizInfoPerDay,
  quizInfoPerTime,
  isLoading,
}) => {
  useEffect(() => {
    achievementAction({
      smokedCigarettes,
      quizInfoPerDay,
      quizInfoPerTime,
    });
  }, []);

  return (
    <>
      <AchievementsHeader />
      {isLoading && <Spinner />}
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
              <p className={style.achievementsPageText}>{achievement.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    achievements: state.achievement,
    smokedCigarettes: state.cigarettes,
    quizInfoPerDay: state.quizInfo.cigarettePerDay,
    quizInfoPerTime: state.quizInfo.cigarettePerTime,
    isLoading: spinnerSelector.isLoading(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    achievementAction: data => dispatch(achievementAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Achievements);
