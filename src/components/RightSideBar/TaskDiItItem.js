import moment from 'moment';
import React from 'react';
import imgBak from '../../assests/images/calendar/trash2.png';
import style from './TimeDoItItem.module.css';


import removeHabitOperation from '../../redux/operations/castomHabitOperation';
import { connect } from 'react-redux';
moment.locale('ru');

const TaskDiItItem = ({ currentHabit, removeHabit }) => {
  // const [visible, setVisible] = useState("false");

  const handlClick = e => {
    if (e.target.dataset._id) {
      removeHabit(e.target.dataset._id);
    }
  };

  // const ShowClick = (e) => {

  //   setVisible("true")
  // };

  return (
    <>
   {/* {visible && <button
              type="button"
              onClick={() => this.onStatus(true)}>
              <ButtonOk data-element="svg" />
              </button>} */}
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
