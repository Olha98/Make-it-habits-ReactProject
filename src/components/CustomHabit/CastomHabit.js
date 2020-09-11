import React from "react";
import style from "./CastomHabit.module.css";

function CastomHabit() {
  return (
    <div className={style.castomHabitContainer}>
      <h2 className={style.castomHabitTitle}>Настройте привычку под себя</h2>
      <p className={style.castomHabitText}>так Вам будет удобнее достичь своей цели</p>
      <form className={style.castomHabitForm}>
        <div className={style.castomHabitLableWrapper}>
          <label className={style.castomHabitLabel}>
            Название
            <input type="text" className={style.castomHabitName} name="castomHabitName" />
          </label>
          <label className={style.castomHabitLabel}>
            Дата старта
            <input type="date" className={style.castomHabitDate} />
          </label>
          <label className={style.castomHabitLabel}>
            Время
            <input type="time" className={style.castomHabitTime} />
          </label>
          <label className={style.castomHabitLabel}>
            Повторение
            <select className={style.castomHabitSelect}>
              <option>Пункт 1</option>
              <option>Пункт 2</option>
            </select>
          </label>
        </div>

        <button className={style.castomHabitDelete}>удалить привычку</button>
        <div className={style.castomHabitBtnWrapper}>
          <button className={style.castomHabitCancelBtn}>Отмена</button>
          <button className={style.castomHabitSaveBtn}>Сохранить</button>
        </div>
      </form>
    </div>
  );
}

export default CastomHabit;
