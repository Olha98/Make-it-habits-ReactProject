import React from "react";
import style from "./CheckListHeader.module.css";

function CheckListHeader() {
  return (
    <div className={style.checkListHeader}>
      <p className={style.checkListTitle}>Чек-лист привычек</p>
      <button className={style.checkListButton} type="button">
        + Сигареты за сегодня
      </button>
    </div>
  );
}

export default CheckListHeader;
