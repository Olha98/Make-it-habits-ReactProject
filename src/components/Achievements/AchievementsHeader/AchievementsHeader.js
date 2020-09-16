import React from "react";
import style from "./AchievementsHeader.module.css"



function AchievementsHeader() {


  return (
    <div className={style.achievementsHeaderWrapper}>
      <p className={style.achievementsHeaderTitle}>Достижения</p>
      <p className={style.achievementsHeaderCount}>Счет: 2020</p>
    </div>
  );
}

export default AchievementsHeader;