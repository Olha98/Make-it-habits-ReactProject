import React, { useState } from "react";
import style from "./HabitChoice.module.css";
import CastomHabit from "../CustomHabit/CastomHabit";
import modalBackDrop from "../ModalBackDrop/ModalBackDrop";
import CastomHabitV from "../CustomHabitV/CastomHabitV";

function HabitChoice({ close}) {
  const [isShowModal, setIsShowModal] = useState(false);
  const showModal = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };
  return (
    <div className={style.habitChoiceContainer}>
      <h2 className={style.habitChoiceTitle}>Добавление привычки</h2>
      <p className={style.habitChoiceText}>Вы можете выбрать привычку из предложенных вариантов</p>
      <button className={style.habitChoiceTemplateBtn}>Выбрать шаблонную привычку +</button>
      <p className={style.habitChoiceText}>или создать свою собственную</p>
      <button onClick={showModal} className={style.habitChoiceOwnBtn}>Добавить свою привычку +</button>
      {isShowModal && (
        <CastomHabitV
          close={closeModal}
        />
      )}
      <button className={style.habitChoiceCancelBtn} onClick={close}>Отмена</button>
    </div>
  );
}

export default modalBackDrop(HabitChoice);