import React from 'react';
import style from './NotificationListItem.module.css';

const NotificationListItem = ({ name }) => (
  <>
    <li className={style.notificationItem}>
      <p className={style.notificationItem_HabitName}>
        Привычка успешно завершена!
      </p>
      <p className={style.notificationItem_HabitName_small}>
        Поздравляем! Вы успешно завершили привычку "{name}"
      </p>
    </li>
  </>
);

export default NotificationListItem;
