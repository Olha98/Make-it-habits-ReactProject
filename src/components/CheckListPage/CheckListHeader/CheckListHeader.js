import React, { useState } from "react";
import Modal from "../../ModalBackDrop/ModalBackDrop";
import style from "./CheckListHeader.module.css";

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
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <h2>Hello, Ismail!</h2>
        </Modal>
      )}
    </div>
  );
}

export default CheckListHeader;
