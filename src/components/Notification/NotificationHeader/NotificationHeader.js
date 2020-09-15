import React from "react";
import style from "./NotificationHeader.module.css";

const NotificationHeader = (
  {
    // newHabbitsDoneToday
  }
) => {
  return (
    <>
      <div className={style.notificationHeader}>
        <p className={style.notificationTitle}>Уведомления</p>
        <p className={style.notificationCounter}>
          {/* {newHabbitsDoneToday} */}
          новых
        </p>
      </div>
    </>
  );
};

export default NotificationHeader;
