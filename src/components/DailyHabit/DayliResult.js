import React, { useState } from 'react';
import { connect } from 'react-redux';
import updateDailyResul from '../../redux/operations/dailyResultOperation';
import modalBackDrop from '../ModalBackDrop/ModalBackDrop';
import style from './DailyHabit.module.css';

import closeBtn from '../../assests/images/closeBlack.png';

const ciggarettes = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

const DailyResult = ({ close, updateResult, prevData, startTime }) => {
  const [quantity, setQuantity] = useState(0);
  const changeQuantity = e => {
    setQuantity(Number(e.target.value));
  };

  const submitQuantity = e => {
    e.preventDefault();
    const date = new Date('2020-09-18T17:09:46.000Z');
    const todayDate = Date.now();
    const dateMs = date.getTime();
    const todayDateHuman = new Date(todayDate);
    const dayPass = Math.round((todayDate - dateMs) / 86400000);
    console.log('before', ciggarettes);
    if (!ciggarettes[dayPass - 1]) {
      ciggarettes[dayPass - 1] = quantity;
    } else console.log(' you already made a choice r');

    console.log('after', ciggarettes);
    updateResult({
      startedAt: startTime,
      data: [...prevData, quantity],
    });
    close();
  };

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
      <form onSubmit={e => submitQuantity(e)}>
        <div className={style.dailyHabitInputWrapper}>
          <p className={style.inputTitle}>Количество сигарет</p>
          <label>
            <input
              onChange={e => changeQuantity(e)}
              placeholder="_._шт"
              className={style.dailyResultInput}
            />
          </label>
        </div>
        <div className={style.dailyHabitBtns}>
          <button
            onClick={() => close()}
            type="button"
            className="buttonTransparent"
          >
            Отмена
          </button>
          <button type="submit" className="buttonTransparent">
            Сохранить
          </button>
          <div onClick={close} className={style.closeBtnWrapper}>
            <img width="16" height="16" alt="closeBtn" src={closeBtn} />
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    prevData: state.cigarettes.data,
    startTime: state.cigarettes.startedAt,
  };
};

export default modalBackDrop(
  connect(mapStateToProps, { updateResult: updateDailyResul })(DailyResult),
);
