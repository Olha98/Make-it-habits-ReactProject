import React, { useState } from 'react';
import { connect } from 'react-redux';
import style from './CheckListHeader.module.css';
import DailyResult from '../../DailyHabit/DayliResult';
import ErrorNotification from '../../ErrorNotification/ErrorNotification';
import { errorSelector } from '../../../redux/selectors';

function CheckListHeader({ error }) {
  const [isShowModal, setIsShowModal] = useState(false);
  const showModal = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <>
      <div className={style.checkListHeader}>
        <p className={style.checkListTitle}>Чек-лист привычек</p>
        <button
          className="btnTransparentWhiteBorder"
          type="button"
          onClick={showModal}
        >
          + Сигареты за сегодня
        </button>
        {isShowModal && <DailyResult close={closeModal} />}
      </div>
      {error && (
        <div className={style.note}>
          <ErrorNotification />
        </div>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  error: errorSelector.getError(state),
});

export default connect(mapStateToProps)(CheckListHeader);
