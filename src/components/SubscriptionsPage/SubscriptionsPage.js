import React from "react";
import SubscriptionsHeader from "./SubscriptionsHeader/SubscriptionsHeader";
import Subscriptions from "./Subscriptions/Subscriptions";
import style from "./SubscriptionsPage.module.css";

function SubscriptionsPage() {
  return (
    <div className={style.subscriptionsContainer}>
      <SubscriptionsHeader />
      <Subscriptions />
    </div>
  );
}

export default SubscriptionsPage;
