import React from "react";
import style from "./Notification.module.css";
import NotificationHeader from "../Notification/NotificationHeader/NotificationHeader";
import NotificationList from "../Notification/NotificationList/NotificationList";

const Notification = () => {
  return (
    <div className={style.notificationPageContainer}>
      <NotificationHeader />
      <NotificationList />
    </div>
  );
};

export default Notification;
