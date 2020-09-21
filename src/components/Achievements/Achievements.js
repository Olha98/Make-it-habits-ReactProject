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
const Achievements = ({ achievements }) => {
  // achievementStatus({ smokedCigarettes, quizInfoPerDay, quizInfoPerTime });

  return (
    <>
      <AchievementsHeader />
      <ul className={style.achievementsPageList}>
        {achievements.map(achievement => (
          <li key={achievement.name} className={style.achievementsPageItem}>
            {console.log(achievement.status)}
            <p
              className={
                achievement.status
                  ? style.activeClass
                  : style.achievementsPageText
              }
            >
              {achievement.text}
            </p>
          </li>
        ))}
        {/* <li className={style.achievementsPageItem}>
          <p
            className={[
              style.achievementsPageText,
              getActiveClass(achievements) ? style.activeClass : '',
            ].join(' ')}
          >
            Отказ от 1 сигареты
          </p>
        </li>
        <li className={style.achievementsPageItem}>
          <p className={style.achievementsPageText}>Отказ от 3 сигарет</p>
        </li>
        <li className={style.achievementsPageItem}>
          <p className={style.achievementsPageText}>Отказ от 5 сигарет</p>
        </li>
        <li className={style.achievementsPageItem}>
          <p className={style.achievementsPageText}>Не курю 1 день</p>
        </li>
        <li className={style.achievementsPageItem}>
          <p className={style.achievementsPageText}>Не курю 3 дня</p>
        </li>
        <li className={style.achievementsPageItem}>
          <p className={style.achievementsPageText}>Не курю 1 неделю</p>
        </li>
        <li className={style.achievementsPageItem}>
          <p className={style.achievementsPageText}>Не курю 2 недели</p>
        </li>
        <li className={style.achievementsPageItem}>
          <p className={style.achievementsPageText}>Не курю 1 месяц</p>
        </li>
        <li className={style.achievementsPageItem}>
          <p className={style.achievementsPageText}>Не курю 3 месяца</p>
        </li>
        <li className={style.achievementsPageItem}>
          <p className={style.achievementsPageText}>Не курю 6 месяцев</p>
        </li>
        <li className={style.achievementsPageItem}>
          <p className={style.achievementsPageText}>Не курю 1 год</p>
        </li>
        <li className={style.achievementsPageItem}>
          <p className={style.achievementsPageText}>+1 год без сигарет</p>
        </li>
        <li className={style.achievementsPageItem}>
          <p className={style.achievementsPageText}>3 года без сигарет</p>
        </li>
        <li className={style.achievementsPageItem}>
          <p className={style.achievementsPageText}>Уже 5. Дай пять!</p>
        </li>
        <li className={style.achievementsPageItem}>
          <p className={style.achievementsPageText}>Вперед к мечте!</p>
        </li>
        <li className={style.achievementsPageItem}>
          <p className={style.achievementsPageText}>Сохранил 1 час</p>
        </li>
        <li className={style.achievementsPageItem}>
          <p className={style.achievementsPageText}>Сохранил 3 часа</p>
        </li>
        <li className={style.achievementsPageItem}>
          <p className={style.achievementsPageText}>Сохранил 5 часов</p>
        </li> */}
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
