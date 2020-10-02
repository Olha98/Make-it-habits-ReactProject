import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import updateDailyResul from '../../redux/operations/dailyResultOperation';
import modalBackDrop from '../ModalBackDrop/ModalBackDrop';
import closeBtn from '../../assests/images/closeBlack.png';
import AlreadyAdded from './AlreadyAdded/AlreadyAdded';
import ErrorNotification from '../ErrorNotification/ErrorNotification';
import Spinner from '../Spinner/Spinner';
import { errorSelector, spinnerSelector } from '../../redux/selectors';
import style from './DailyHabit.module.css';

const DailyResult = ({
  close,
  updateResult,
  prevData,
  startTime,
  error,
  isLoading,
}) => {
  const [quantity, setQuantity] = useState(0);
  const [isAlreadyAdded, setAlreadyAdded] = useState(false);
  const isError = useRef(false);
  useEffect(() => {
    if (error) {
      isError.current = true;
    }
  }, [error]);

  const openAlreadyAdded = () => {
    setAlreadyAdded(true);
  };

  const changeQuantity = e => {
    setQuantity(Number(e.target.value));
  };

  const submitQuantity = async e => {
    e.preventDefault();
    const date = new Date(startTime);
    const todayDate = Date.now();
    const dateMs = date.getTime();
    const dayPass = Math.floor((todayDate - dateMs) / 86400000);

    if (!prevData[dayPass]) {
      prevData[dayPass] = quantity;
      await updateResult({
        startedAt: startTime,
        data: prevData,
      });

      if (isError.current) {
        return;
      }

      close();
    } else openAlreadyAdded();
  };

  return (
    <div className={style.dailyHabitWrapper}>
      {isAlreadyAdded && <AlreadyAdded close={close} />}
      <div>
        <h2 className={style.dailyHabitTitle}>
          Сколько сигарет за сегодня Вы выкурили?
        </h2>
        <p className={style.dailyHabitDescription}>
          Давайте вместе постараемся свести это число к нулю.
        </p>
        {isLoading && <Spinner />}
        {error && <ErrorNotification />}
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
    isLoading: spinnerSelector.isLoading(state),
    error: errorSelector.getError(state),
  };
};

export default modalBackDrop(
  connect(mapStateToProps, { updateResult: updateDailyResul })(DailyResult),
);
