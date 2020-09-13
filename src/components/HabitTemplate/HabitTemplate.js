import React from "react";
import style from "./HabitTemplate.module.css";

// import { Scrollbars } from "react-custom-scrollbars";
import CustomScrollbars from "../../assests/scroll/scroll";

// class App extends Component {
//   render() {
//     return (
// <Scrollbars style={{ width: 500, height: 300 }}>
//   <p>Some great content...</p>
// </Scrollbars>
//     );
//   }
// }

const HabitTemplate = () => {
  return (
    <div className={style.habbitTemplateWrapper}>
      <h2 className={style.habitTemplateTitle}>Шаблонные привычки</h2>
      <CustomScrollbars style={{ width: 440, height: 300 }}>
        <ul className={style.habitTemplateList}>
          <li className={style.habitTemplateItem}>
            <a className={style.habitTemplateItemLink} href="home">
              Распланировать свой день
            </a>
          </li>
          <li className={style.habitTemplateItem}>
            <a className={style.habitTemplateItemLink} href="home">
              Встать на 30 мин раньше обычного
            </a>
          </li>
          <li className={style.habitTemplateItem}>
            <a className={style.habitTemplateItemLink} href="home">
              Заменить сигарету половинкой киви
            </a>
          </li>
          <li className={style.habitTemplateItem}>
            <a className={style.habitTemplateItemLink} href="home">
              Начать утро с 10-15 минутной зарядки
            </a>
          </li>
          <li className={style.habitTemplateItem}>
            <a className={style.habitTemplateItemLink} href="home">
              Читать минимум 30 мин
            </a>
          </li>
          <li className={style.habitTemplateItem}>
            <a className={style.habitTemplateItemLink} href="home">
              Делать 20 отжиманий день
            </a>
          </li>
          <li className={style.habitTemplateItem}>
            <a className={style.habitTemplateItemLink} href="home">
              Бегать 4 км по утрам
            </a>
          </li>
          <li className={style.habitTemplateItem}>
            <a className={style.habitTemplateItemLink} href="home">
              Медитировать 15 минут в день
            </a>
          </li>
        </ul>
      </CustomScrollbars>

      <button className={style.btnTransparentWhiteBorder}>Назад</button>
    </div>
  );
};

export default HabitTemplate;
