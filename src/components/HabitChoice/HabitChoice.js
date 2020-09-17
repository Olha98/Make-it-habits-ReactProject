import React, { useState } from "react";
import style from "./HabitChoice.module.css";
import CastomHabit from "../CustomHabit/CastomHabit";
import modalBackDrop from "../ModalBackDrop/ModalBackDrop";
import HabitTemplate from "../HabitTemplate/HabitTemplate";
// import CastomHabitV from "../CustomHabitV/CastomHabitV";

function HabitChoice({ close}) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowTemplate, setTemplateModal] = useState(false);
  const showModal = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };

  const showTemplateModal = () => {
    setTemplateModal(true);
  };
  const closeTemplateModal = () => {
    setTemplateModal(false);
  };



  return (
    <div className={style.habitChoiceContainer}>
      <h2 className={style.habitChoiceTitle}>Добавление привычки</h2>
      <p className={style.habitChoiceText}>Вы можете выбрать привычку из предложенных вариантов</p>
      <button type="button" onClick={showTemplateModal} className={style.habitChoiceTemplateBtn}>Выбрать шаблонную привычку +</button>
      <p className={style.habitChoiceText}>или создать свою собственную</p>
      <button type="button" onClick={showModal} className={style.habitChoiceOwnBtn}>Добавить свою привычку +</button>
      {isShowModal && (
        <CastomHabit
          close={closeModal}
        />
      )}
      {isShowTemplate && (
        <HabitTemplate
          close={closeTemplateModal}
        />
      )}
      <button className={style.habitChoiceCancelBtn} onClick={close}>Отмена</button>
    </div>
  );
}

export default modalBackDrop(HabitChoice);