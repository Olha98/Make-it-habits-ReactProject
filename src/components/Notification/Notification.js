import React from "react";
import NotificationHeader from "../Notification/NotificationHeader/NotificationHeader";
import NotificationList from "../Notification/NotificationList/NotificationList";
import style from "./Notification.module.css";

const Notification = () => {
  return (
    <div className={style.notificationPageContainer}>
      <NotificationHeader />
      <NotificationList />
    </div>
  );
};

export default Notification;
