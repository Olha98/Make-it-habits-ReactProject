import React from "react";
import style from "./Subscriptions.module.css";
import Card from "../../Card/Card";
// import { ReactComponent as SupportPic } from "../../../assests/images/Subscriptions/support-pic.svg";

function Subscriptions() {
  return (
    <div className={style.subscriptionsContainer}>
      <section className={style.subscriptionsSectionTypes}>
        <p className={style.subscriptionsSectionTitle}>Тип подписки</p>
        <ul className={style.subscriptionsList}>
          <li className={style.subscriptionsItem}>
            <p
              className={[
                style.subscriptionsItemTitle,
                style.subscriptionsItemTitleNoob,
              ].join(" ")}
            >
              Noob
            </p>
            <p className={style.subscriptionsItemDescription}>
              30 дней —{" "}
              <span className={style.subscriptionsItemDescriptionPrice}>
                $4.99
              </span>
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
              1 месяц —{" "}
              <span className={style.subscriptionsItemDescriptionPrice}>
                $4.80
              </span>{" "}
              <span className={style.subscriptionsItemDescriptionDiscount}>
                - 3%
              </span>
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
              3 месяца —{" "}
              <span className={style.subscriptionsItemDescriptionPrice}>
                $14.20{" "}
              </span>
              <span className={style.subscriptionsItemDescriptionDiscount}>
                - 5%
              </span>
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
              6 месяцев —{" "}
              <span className={style.subscriptionsItemDescriptionPrice}>
                $27.84{" "}
              </span>
              <span className={style.subscriptionsItemDescriptionDiscount}>
                - 7%
              </span>
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
              12 месяцев —{" "}
              <span className={style.subscriptionsItemDescriptionPrice}>
                $53.89{" "}
              </span>
              <span className={style.subscriptionsItemDescriptionDiscount}>
                - 10%
              </span>
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
