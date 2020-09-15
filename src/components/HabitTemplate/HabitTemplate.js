import React from "react";
import style from "./HabitTemplate.module.css";
import CustomScrollbars from "../../assests/scroll/scroll";

const HabitTemplate = () => {
  return (
    <div className={style.habbitTemplateWrapper}>
      <h2 className={style.habitTemplateTitle}>Шаблонные привычки</h2>
      <CustomScrollbars style={{ width: 440, height: 300 }}>
        <ul className={style.habitTemplateList}>
          <li className={style.habitTemplateItem}>
            <a className={style.habitTemplateItemLink} href="home">
              Начинать утро с 10-15 минутной зарядки
            </a>
          </li>
          <li className={style.habitTemplateItem}>
            <a className={style.habitTemplateItemLink} href="home">
              Планировать свой день.
            </a>
          </li>
          <li className={style.habitTemplateItem}>
            <a className={style.habitTemplateItemLink} href="home">
              Вставать на 30 мин раньшьше обычного .
            </a>
          </li>
          <li className={style.habitTemplateItem}>
            <a className={style.habitTemplateItemLink} href="home">
              Читать минимум 30 мин в день
            </a>
          </li>
          <li className={style.habitTemplateItem}>
            <a className={style.habitTemplateItemLink} href="home">
              Замена выкуриной сигареты половинкой киви.
            </a>
          </li>
          <li className={style.habitTemplateItem}>
            <a className={style.habitTemplateItemLink} href="home">
              Принять контрасный душ.
            </a>
          </li>
          <li className={style.habitTemplateItem}>
            <a className={style.habitTemplateItemLink} href="home">
              5 минутная зарядка для глаз (обед)
            </a>
          </li>
          <li className={style.habitTemplateItem}>
            <a className={style.habitTemplateItemLink} href="home">
              5 минут отдыха после 25 концентрации.
            </a>
          </li>
          <li className={style.habitTemplateItem}>
            <a className={style.habitTemplateItemLink} href="home">
              Выходить на 15 минут раньше от времени
            </a>
          </li>
          <li className={style.habitTemplateItem}>
            <a className={style.habitTemplateItemLink} href="home">
              Раз в неделлю проводить медитацию.
            </a>
          </li>
          <li className={style.habitTemplateItem}>
            <a className={style.habitTemplateItemLink} href="home">
              Попробывать что то новое .
            </a>
          </li>
          <li className={style.habitTemplateItem}>
            <a className={style.habitTemplateItemLink} href="home">
              Начинать робочий день с подготовки стола
            </a>
          </li>
        </ul>
      </CustomScrollbars>

      <button className={style.btnTransparentWhiteBorder}>Назад</button>
    </div>
  );
};

export default HabitTemplate;
