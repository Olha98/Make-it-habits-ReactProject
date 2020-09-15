import React, { useState } from "react";
import style from "./Congratulations.module.css";
import congratsPhoto from "../../assests/images/congratulations//Ресурс 1 1.png";
import Modal from "../ModalBackDrop/ModalBackDrop";
import CastomHabit from "../CustomHabit/CastomHabit";

const Congratulations = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const showModal = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };
  return (
    <>
      <div id="home" className={style.congratulationWrapper}>
        <div>
          <h2 className={style.congratulationTitle}>Поздравляем</h2>
          <p>Вы успешно освоили привычку и стали на шаг ближе к своей цели.</p>
        </div>
        <div>
          <img
            src={congratsPhoto}
            alt="congratsphoto"
            width="450"
            height="330"
          />
        </div>
        <div className={style.congratsBtnWrapper}>
          <button onClick={showModal} className={style.buttonTransparent}>
            Повторить
          </button>
          <button className={style.buttonTransparent}>
            Добавить новую привычку
          </button>
        </div>
      </div>

      {isShowModal && (
        <Modal>
          <CastomHabit closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default Congratulations;
