import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../Spinner/Spinner';
import modalBackDrop from '../../ModalBackDrop/ModalBackDrop';
import {
  spinnerSelector,
  errorSelector,
  subscrSelectors,
} from '../../../redux/selectors';
import { subscrOperations } from '../../../redux/operations';
// import { subscrActions } from '../../../redux/actions';
import style from './Subscriptions.module.css';

const delay = ms =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve('');
      console.log('delay');
    }, ms),
  );

const types = ['Noob', 'Basic', 'Standart', 'Premium', 'Ultra'];

const ChoiceType = ({ changeType, isLoading, closeModal, error }) => {
  const onChoiceType = async e => {
    const type = e.target.dataset.type;
    changeType({ typeSubscription: type }).then(response => {
      if (response.status >= 400) {
        return;
      }
      closeModal();
    });
  };

  return (
    <div className={style.choiceTypeWrapper}>
      <h2 className={style.choiceTypeTitle}>Выберите тип подписки:</h2>

      {isLoading && <Spinner />}

      {error && <h3 className="error">Извините, произошла ошибка: {error} </h3>}

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
  type: subscrSelectors.getTypeSubscription(state),
  isLoading: spinnerSelector.isLoading(state),
  error: errorSelector.getError(state),
});

// const mapDispatchToProps = {
//   // changeType: subscrActions.changeTypeSuccess, // если добавят поле на бэке, то взять метод из Operations
//   changeType: subscrOperations.changeType,
// };

const mapDispatchToProps = dispatch => ({
  changeType: type => dispatch(subscrOperations.changeType(type)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(modalBackDrop(ChoiceType));
