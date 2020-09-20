import React from "react";
import style from "./Congratulations.module.css";
import congratsPhoto from "../../assests/images/congratulations//Ресурс 1 1.png";
import modalBackDrop from "../ModalBackDrop/ModalBackDrop";

const Congratulations = () => {
  return (
    <div id="home" className={style.congratulationWrapper}>
      <div>
        <h2 className={style.congratulationTitle}>Поздравляем</h2>
        <p>Вы успешно освоили привычку и стали на шаг ближе к своей цели.</p>
      </div>
      <div>
        <img src={congratsPhoto} alt="congratsphoto" width="450" height="330" />
      </div>
      <div className={style.congratsBtnWrapper}>
        <button className={style.buttonTransparent}>Повторить</button>
        <button className={style.buttonTransparent}>
          Добавить новую привычку
        </button>
      </div>
    </div>
  );
};

export default modalBackDrop(Congratulations);
