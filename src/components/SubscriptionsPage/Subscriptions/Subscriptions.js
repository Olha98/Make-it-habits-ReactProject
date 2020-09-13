import React from "react";
import style from "./Subscriptions.module.css";
import Card from "../../Card/Card";

function Subscriptions() {
  return (
    <div className={style.subscriptionsContainer}>
      <section className={style.subscriptionsSectionTypes}>
        <p className={style.subscriptionsSectionTitle}>Тип подписки</p>
        <ul className={style.subscriptionsList}>
          <li className={style.subscriptionsItem}>
            <p className={style.subscriptionsItemTitle}>Noob</p>
            <p className={style.subscriptionsItemDescription}>
              30 дней — $4.99
            </p>
          </li>
          <li className={style.subscriptionsItem}>
            <p
              className={[
                style.subscriptionsItemTitle,
                style.subscriptionsItemTitleBasic,
              ].join(" ")}
            >
              Basic
            </p>
            <p className={style.subscriptionsItemDescription}>
              1 месяц — $4.80 -3%
            </p>
          </li>
          <li className={style.subscriptionsItem}>
            <p
              className={[
                style.subscriptionsItemTitle,
                style.subscriptionsItemTitleStandart,
              ].join(" ")}
            >
              Standart
            </p>
            <p className={style.subscriptionsItemDescription}>
              3 месяца — $14.20 - 5%
            </p>
          </li>
          <li className={style.subscriptionsItem}>
            <p
              className={[
                style.subscriptionsItemTitle,
                style.subscriptionsItemTitlePremium,
              ].join(" ")}
            >
              Premium
            </p>
            <p className={style.subscriptionsItemDescription}>
              6 месяцев — $27.84 - 7%
            </p>
          </li>
          <li className={style.subscriptionsItem}>
            <p
              className={[
                style.subscriptionsItemTitle,
                style.subscriptionsItemTitleUltra,
              ].join(" ")}
            >
              Ultra
            </p>
            <p className={style.subscriptionsItemDescription}>
              12 месяцев — $53.89 - 10%
            </p>
          </li>
        </ul>
        <button className="btnTransparentWhiteBorder">Изменить подписку</button>
      </section>
      <section className={style.subscriptionsSectionCards}>
        <p className={style.subscriptionsSectionTitle}>Мои карты</p>
        <Card />
      </section>
    </div>
  );
}

export default Subscriptions;
