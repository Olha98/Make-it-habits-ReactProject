import React from "react";
import { style } from "./Economizing.module.css";
import { ReactComponent as Wallet } from "../../../assests/images/LeftSideBar/wallet.svg";
import { ReactComponent as Hourglass } from "../../../assests/images/LeftSideBar/hourglass.svg";

export default function Economizing() {
  return (
    <>
      <section className={style.leftSideBar_economizing}>
        <ul className={style.leftSideBar_economizing__list}>
          <li className={style.leftSideBar_economizing__list_item}>
            <p className={style.leftSideBar_economizing__list_item_title}>
              Сэкономленные деньги
            </p>
            <p className={style.leftSideBar_economizing__list_item_value}>
              <Wallet /> 2500 &#8372;
            </p>
          </li>
          <li className={style.leftSideBar_economizing__list_item}>
            <p className={style.leftSideBar_economizing__list_item_title}>
              Сэкономленное время
            </p>
            <p className={style.leftSideBar_economizing__list_item_value}>
              <Hourglass />2 ч 35 мин
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}
