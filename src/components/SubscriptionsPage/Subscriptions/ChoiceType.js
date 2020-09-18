import React, { useState } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../Spinner/Spinner';
import modalBackDrop from '../../ModalBackDrop/ModalBackDrop';
import subscribeSelectors from '../../../redux/selectors/subscribeSelector';
import subscribeActions from '../../../redux/actions/subscribeActions';
import style from './Subscriptions.module.css';

const types = ['Noob', 'Basic', 'Standart', 'Premium', 'Ultra'];

const ChoiceType = ({ changeType, isLoading, closeModal }) => {
  const onChoiceType = e => {
    const type = e.target.dataset.type;
    changeType(type);
    closeModal();
  };
  return (
    <div className={style.choiceTypeWrapper}>
      <h2 className={style.choiceTypeTitle}>Выберите тип подписки:</h2>
      {isLoading && <Spinner />}
      <ul className={style.choiceTypeList}>
        {types.map(type => (
          <li key={type} className={style.choiceTypeItem} data-value={type}>
            <button
              onClick={onChoiceType}
              className={style['subscriptionsItemTitle' + type]}
              data-type={type}
            >
              {type}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  type: subscribeSelectors.getTypeSubscription(state),
  isLoading: state.loading,
});

const mapDispatchToProps = {
  changeType: subscribeActions.changeTypeSuccess, // если добавят поле на бэке, то взять метод из Operations
};

export default modalBackDrop(
  connect(mapStateToProps, mapDispatchToProps)(ChoiceType),
);
