import moment from 'moment';
import React from 'react';
import imgBak from '../../assests/images/calendar/trash2.png';
import style from './TimeDoItItem.module.css';
import removeHabitOperation from '../../redux/operations/castomHabitOperation';
moment.locale('ru');

const TaskDiItItem = ({ userHabit }) => {
  // const dadada = moment(new Date(userHabit.planningTime)).format('LT');

  // const array = ["22:54", "22:35", "9:87", "10:74", "12:34"]

  const handlClick = e => {
    if(e.target.dataset._id){
      // removeHabitOperation(e.target.dataset._id)
    }
    console.log(e.target.dataset._id, 'tfhutn');
  };

  return (
    <div className={style.containerTimeDoIt}>
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
  );
};

export default TaskDiItItem;
