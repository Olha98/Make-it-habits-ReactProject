import React from "react";
import style from "./SubscriptionsPage.module.css";
import SubscriptionsPageHeader from "./SubscriptionsPageHeader/SubscriptionsPageHeader";

function SubscriptionsPage() {
  return (
    <div className={style.subscriptionsContainer}>
      <SubscriptionsPageHeader />
    </div>
  );
}

export default SubscriptionsPage;
