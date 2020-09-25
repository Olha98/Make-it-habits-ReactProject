import React from 'react';
import modalBackDrop from '../../ModalBackDrop/ModalBackDrop';
import closeBtn from '../../../assests/images/closeBlack.png';
import style from './AlreadyAdded.module.css';

const AlreadyAdded = ({ close }) => {
  return (
    <div className={style.dailyHabitWrapper}>
      <h2 className={style.title}>
        Вы уже отметили количество выкуренных сигарет за сегодня
      </h2>
      <div onClick={close} className={style.closeBtnWrapper}>
        <img width="16" height="16" alt="closeBtn" src={closeBtn} />
      </div>
    </div>
  );
};

export default modalBackDrop(AlreadyAdded);
