import React from "react";
import { style } from "./Habits.module.css";
export default function Habits() {
  return (
    <>
      <section className={style.leftSideBar_habits}>
        <h3 className={style.leftSideBar_habits_title}>Привычки</h3>
        <ul className={style.leftSideBar_habits__list}>
          <li className={style.leftSideBar_habits__list_item}>
            <div className={style.leftSideBar_habits__list_item_circle}></div>
            <p className={style.leftSideBar_habits__list_item_habit}>
              Замена сигарет на леденцы, орешки и т.п.
            </p>
          </li>
        </ul>
        <button className={style.leftSideBar_habits__button}>
          Добавить привычку
        </button>
      </section>
    </>
  );
}
