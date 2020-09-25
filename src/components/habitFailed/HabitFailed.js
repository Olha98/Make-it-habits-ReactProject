import React, { useState } from 'react';
import failedPhoto from '../../assests/images/habitFailed/failed3.jpg';
import modalBackDrop from '../ModalBackDrop/ModalBackDrop';
import CastomHabit from '../CustomHabit/CastomHabit';
import style from './HabitFailed.module.css';

const HabitFailed = ({ close, habitName, fromCheckList }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const showModal = () => {
    setIsShowModal(true);
  };

  return (
    <div id="home" className={style.congratulationWrapper}>
      <div>
        <h2 className={style.congratulationTitle}>Грусть и печаль</h2>
        <p className={style.description}>Вы не освоили привычку.</p>
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
        <button onClick={() => showModal()} className={style.buttonTransparent}>
          Повторить
        </button>
      </div>
      {isShowModal && (
        <CastomHabit
          fromCheckListFromCong={fromCheckList}
          habitNameFromCong={habitName}
          close={close}
        />
      )}
    </div>
  );
};

export default modalBackDrop(HabitFailed);
