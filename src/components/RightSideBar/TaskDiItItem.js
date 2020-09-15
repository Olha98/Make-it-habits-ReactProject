import React from "react";
import imgBak from "../../assests/images/calendar/trash2.png";
import style from "./TimeDoItItem.module.css";

const TaskDiItItem = ({ task }) => {
  // const { planningTime } = task;
  return (
    <div className={style.containerTimeDoIt}>
      <span className={style.spanTimeDoIt}>14.00</span>
      <li className={style.nameTimeDoIt}>
        <p className={style.textTimeDoIt}>{task.name}</p>
      </li>
      <div className={style.imgBoxTimeDoIt}>
        <img
          src={imgBak}
          alt="task"
          width="15px"
          height="15px"
          className={style.imgTimeDoIt}
        />
      </div>
    </div>
  );
};

export default TaskDiItItem;
