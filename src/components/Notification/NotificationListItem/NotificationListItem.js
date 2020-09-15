import React from "react";
import style from "./NotificationListItem.module.css";

const NotificationListItem = ({ name }) => (
  <>
    <li className={style.notificationItem}>
      <p> {name} : </p>
    </li>
  </>
);

export default NotificationListItem;
