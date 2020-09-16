import React, { useState } from "react";
// import Modal from "../../ModalBackDrop/ModalBackDrop";
import style from "./CheckListHeader.module.css";
import DailyResult from "../../DailyHabit/DayliResult";

function CheckListHeader() {
  const [isShowModal, setIsShowModal] = useState(false);
  const showModal = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <div className={style.checkListHeader}>
      <p className={style.checkListTitle}>Чек-лист привычек</p>
      <button
        className="btnTransparentWhiteBorder"
        type="button"
        onClick={showModal}
      >
        + Сигареты за сегодня
      </button>
      {isShowModal && <DailyResult close={closeModal} />}
    </div>
  );
}

export default CheckListHeader;
