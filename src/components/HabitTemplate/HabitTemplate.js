import React, { useState } from "react";
import style from "./HabitTemplate.module.css";
import CustomScrollbars from "../../assests/scroll/scroll";
// import Modal from "../ModalBackDrop/ModalBackDrop";
import CastomHabit from "../CustomHabit/CastomHabit";
import modalBackDrop from "../ModalBackDrop/ModalBackDrop";

const templateHabits = [
  "Начинать утро с 10-15 минутной зарядки",
  "Планировать свой день.",
  "Вставать на 30 мин раньшьше обычного .",
  "Читать минимум 30 мин в день",
  "Замена выкуриной сигареты половинкой киви.",
  "5 минутная зарядка для глаз (обед).",
  "Принять контрасный душ.",
  "5 минут отдыха после 25 концентрации.",
  "Выходить на 15 минут раньше от времени",
  "Раз в неделлю проводить медитацию.",
  "Попробывать что то новое .",
  "Начинать робочий день с подготовки стола",
];

const HabitTemplate = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const showModal = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };
  return (
    <>
      <div className={style.habbitTemplateWrapper}>
        <h2 className={style.habitTemplateTitle}>Шаблонные привычки</h2>
        <CustomScrollbars style={{ width: 440, height: 300 }}>
          <ul className={style.habitTemplateList}>
            {templateHabits.map((habit) => (
              <>
                <li className={style.habitTemplateItem} data-value={habit}>
                  <button
                    onClick={showModal}
                    className={style.habitTemplateItemLink}
                  >
                    {habit}
                  </button>
                </li>
              </>
            ))}
          </ul>
        </CustomScrollbars>
        {isShowModal && <CastomHabit closeModal={closeModal} />}
        <button className={style.btnTransparentWhiteBorder}>Назад</button>
      </div>
    </>
  );
};

export default modalBackDrop(HabitTemplate);
