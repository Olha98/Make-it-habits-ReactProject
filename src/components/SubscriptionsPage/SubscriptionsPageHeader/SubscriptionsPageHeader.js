import React from "react";
import style from "./SubscriptionsPageHeader.module.css";

function SubscriptionsPageHeader() {
  return (
    <div className={style.subscriptionsHeader}>
      <p className={style.subscriptionsTitle}>Подписки</p>
    </div>
  );
}

export default SubscriptionsPageHeader;
