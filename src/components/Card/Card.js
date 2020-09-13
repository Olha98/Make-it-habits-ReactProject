import React from "react";
import style from "./Card.module.css";
import { ReactComponent as Trash } from "../../assests/images/Subscriptions/trash.svg";

function Card() {
  return (
    <div className={style.card}>
      <p className={style.cardName}>Моя карта</p>
      <p className={style.cardNumber}>4213 3535 5631 0991</p>
      <p className={style.cardExpireDate}>Истекает 31.07.2024</p>
      <button className={style.cardDeleteButton}>
        <Trash className={style.trashIcon} />
      </button>
    </div>
  );
}

export default Card;
