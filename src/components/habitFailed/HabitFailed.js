import React from "react";
import style from "./HabitFailed.module.css";
import failedPhoto from "../../assests/images/habitFailed/failed3.jpg";

const HabitFailed = () => {
  return (
    <div id="home" className={style.congratulationWrapper}>
      <div>
        <h2 className={style.congratulationTitle}>Грусть и печаль</h2>
        <p>Вы не освоили привычку.</p>
      </div>
      <div className={style.imgWrapper}>
        <img
          className={style.img}
          src={failedPhoto}
          alt="failedsphoto"
          width="300"
          height="330"
        />
      </div>
      <div className={style.congratsBtnWrapper}>
        <button className={style.buttonTransparent}>Повторить</button>
      </div>
    </div>
  );
};

export default HabitFailed;
