import React from 'react';
import style from './AchievementsHeader.module.css';

function AchievementsHeader() {
  return (
    <div className={style.achievementsHeaderWrapper}>
      <p className={style.achievementsHeaderTitle}>Достижения</p>
    </div>
  );
}

export default AchievementsHeader;
