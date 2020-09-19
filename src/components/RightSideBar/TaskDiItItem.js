import moment from 'moment';
import React, { useState } from 'react';
import imgBak from '../../assests/images/calendar/trash2.png';
import style from './TimeDoItItem.module.css';
// import { ReactComponent as ButtonOk } from '../../../../assests/images/CheckListPage/button_ok.svg';
// import { ReactComponent as ButtonOk } from '../../../../assests/images/CheckListPage/button_ok.svg';


import removeHabitOperation from '../../redux/operations/castomHabitOperation';
import { connect } from 'react-redux';
moment.locale('ru');

const TaskDiItItem = ({ userHabit, removeHabit }) => {
  const [visible, setVisible] = useState("false");

  const handlClick = e => {
    if (e.target.dataset._id) {
      removeHabit(e.target.dataset._id);
    }
  };

  const ShowClick = (e) => {
    console.log(e.target,"target")
    setVisible("true")
  };

  return (
    <>
   {/* {visible && <button
              type="button"
              onClick={() => this.onStatus(true)}>
              <ButtonOk data-element="svg" />
              </button>} */}
      <div className={style.containerTimeDoIt} onClick={ShowClick}>
        <span className={style.spanTimeDoIt}>
          {moment(new Date(userHabit.planningTime)).format('LT')}
        </span>
        <li className={style.nameTimeDoIt}>
          <p className={style.textTimeDoIt}>{userHabit.name}</p>
        </li>
        <div className={style.imgBoxTimeDoIt}>
          <img
            src={imgBak}
            alt="task"
            width="15px"
            height="15px"
            className={style.imgTimeDoIt}
            data-_id={userHabit._id}
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
