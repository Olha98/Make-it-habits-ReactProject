import React from "react";
import style from "./SubscriptionsHeader.module.css";

function SubscriptionsHeader() {
  return (
    <div className={style.subscriptionsHeader}>
      <p className={style.subscriptionsTitle}>Подписки</p>
    </div>
  );
}

export default SubscriptionsHeader;
