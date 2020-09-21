import moment from 'moment';
import React, { useState } from 'react';
import imgBak from '../../assests/images/calendar/trash2.png';
import style from './TimeDoItItem.module.css';
import { ReactComponent as ButtonOk } from '../../assests/images/CheckListPage/button_ok.svg';

import removeHabitOperation from '../../redux/operations/castomHabitOperation';
import { connect } from 'react-redux';
moment.locale('ru');

const TaskDiItItem = ({ currentHabit, removeHabit }) => {
  const [visible, setVisible] = useState('false');

  const handlClick = e => {
    if (e.target.dataset._id) {
      removeHabit(e.target.dataset._id);
    }
  };

  const dataNow = new Date();

  const dataNowCalendar = moment(dataNow).format('L');
  const arrayDataHebits = currentHabit.arrayDate;
  // console.log(arrayDataHebits, 'arrayDataHebits');

  for (let arrayDataHebit of arrayDataHebits) {
    if (arrayDataHebit === dataNowCalendar) {
//нужен индекс елемента 
//смотрит индекс елементов
    }
  }


  // const ShowClick = (e) => {
  //   setVisible("true")
  // };

  return (
    <>
      {visible && (
        <button
          className={style.btnCalendar}
          type="button"
          onClick={() => setVisible(true)}
        >
          <ButtonOk data-element="svg" />
        </button>
      )}

      <div className={style.containerTimeDoIt}>
        {/* <div className={style.containerTimeDoIt} onClick={ShowClick}> */}
        <span className={style.spanTimeDoIt}>
          {moment(new Date(currentHabit.planningTime)).format('LT')}
        </span>
        <li className={style.nameTimeDoIt}>
          <p className={style.textTimeDoIt}>{currentHabit.name}</p>
        </li>
        <div className={style.imgBoxTimeDoIt}>
          <img
            src={imgBak}
            alt="task"
            width="15px"
            height="15px"
            className={style.imgTimeDoIt}
            data-_id={currentHabit._id}
            onClick={handlClick}
          />
        </div>
      </div>
      <div className={style.dotter}></div>
    </>
  );
};

export default connect(null, {
  removeHabit: removeHabitOperation.removeHabitOperation,
})(TaskDiItItem);
