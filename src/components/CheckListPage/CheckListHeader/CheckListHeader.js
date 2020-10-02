import React, { useState } from 'react';
import { connect } from 'react-redux';
// import Modal from "../../ModalBackDrop/ModalBackDrop";
import style from './CheckListHeader.module.css';
import DailyResult from '../../DailyHabit/DayliResult';

// * Импорт компонента с сообщением об ошибке + селетор для пропов
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

      {/* 
      // * Здесь добавляем сообщение об ошибке 
      */}
      <div className={style.note}>{error && <ErrorNotification />}</div>
    </>
  );
}

// * добавляем проп с ошибкой
const mapStateToProps = state => ({
  error: errorSelector.getError(state),
});

// * и обернем компонент теперь в коннект
export default connect(mapStateToProps)(CheckListHeader);
