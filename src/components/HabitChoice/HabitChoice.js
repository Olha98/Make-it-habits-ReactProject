import React from "react";
import modalBackDrop from "../ModalBackDrop/ModalBackDrop";
import style from "./HabitChoice.module.css";

function HabitChoice() {
  return (
    <div className={style.habitChoiceContainer}>
      <h2 className={style.habitChoiceTitle}>Добавление привычки</h2>
      <p className={style.habitChoiceText}>
        Вы можете выбрать привычку из предложенных вариантов
      </p>
      <button className={style.habitChoiceTemplateBtn}>
        Выбрать шаблонную привычку +
      </button>
      <p className={style.habitChoiceText}>или создать свою собственную</p>
      <button className={style.habitChoiceOwnBtn}>
        Добавить свою привычку +
      </button>
      <button className={style.habitChoiceCancelBtn}>Отмена</button>
    </div>
  );
}

export default modalBackDrop(HabitChoice);
