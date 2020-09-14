import React from "react";

import style from "./DailyHabit.module.css";

const DailyResult = () => {
  return (
    <div className={style.dailyHabitWrapper}>
      <div>
        <h2 className={style.dailyHabitTitle}>
          Сколько сигарет за сегодня Вы выкурили?
        </h2>
        <p className={style.dailyHabitDescription}>
          Давайте вместе постараемся свести это число к нулю.
        </p>
      </div>
      <form>
        <div className={style.dailyHabitInputWrapper}>
          <p className={style.inputTitle}>Количество сигарет</p>
          <label>
            <input placeholder="_._шт" className={style.dailyResultInput} />
          </label>
        </div>
        <div className={style.dailyHabitBtns}>
          <button type="button" className="buttonTransparent">
            Отмена
          </button>
          <button type="submit" className="buttonTransparent">
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};

export default DailyResult;
