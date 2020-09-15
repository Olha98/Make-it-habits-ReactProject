import React from "react";
import style from "./SubscriptionsPage.module.css";
import SubscriptionsHeader from "./SubscriptionsHeader/SubscriptionsHeader";
import Subscriptions from "./Subscriptions/Subscriptions";

function SubscriptionsPage() {
  return (
    <div className={style.subscriptionsContainer}>
      <SubscriptionsHeader />
      <Subscriptions />
    </div>
  );
}

export default SubscriptionsPage;
