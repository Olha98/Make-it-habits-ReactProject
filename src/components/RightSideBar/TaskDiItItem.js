import moment from 'moment';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { ReactComponent as ButtonOk } from '../../assests/images/CheckListPage/button_ok.svg';
import removeHabitOperation from '../../redux/operations/castomHabitOperation';
import imgBak from '../../assests/images/calendar/trash2.png';
import style from './TimeDoItItem.module.css';
moment.locale('ru');

const TaskDiItItem = ({ currentHabit, removeHabit }) => {
  const [visible, setVisible] = useState(false);

  const dataNow = new Date();
  const day = currentHabit.day;
  const dataNowCalendar = moment(dataNow).format('L');
  const arrayDataHebits = currentHabit.arrayDate;
  const dateNull = currentHabit.data;

  useEffect(() => {
    if (dataNowCalendar === day && arrayDataHebits.includes(dataNowCalendar)) {
      const index = arrayDataHebits.reduce((acc, date, idx) => {
        if (date === dataNowCalendar) {
          acc = idx;
        }
        return acc;
      }, '');

      dateNull.map((elem, idx) => {
        if (idx === index) {
          if (elem) {
            setVisible(true);
            return elem;
          }else{
            setVisible(false);
            return elem;
          }
         
        }
      
      });
    }
  }, [visible, setVisible, currentHabit, removeHabit]);




  const handlClick = e => {
    if (e.target.dataset._id) {
      removeHabit(e.target.dataset._id);
    }
  };

  return (
    <>
      <div className={style.containerTimeDoIt}>
        {visible ? (
          <button
            className={style.btnCalendar}
            type="button"
            onClick={() => setVisible(true)}
          >
            <ButtonOk data-element="svg" />
          </button>
        ) : (
          <span className={style.spanTimeDoIt}>
            {moment(new Date(currentHabit.planningTime)).format('LT')}
          </span>
        )}

        <li className={style.nameTimeDoIt}>
          {visible ? (
            <p className={style.textThrow}>{currentHabit.name}</p>
          ) : (
            <p className={style.textTimeDoIt}>{currentHabit.name}</p>
          )}
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
