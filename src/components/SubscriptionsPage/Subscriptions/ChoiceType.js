import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../../Spinner/Spinner';
import modalBackDrop from '../../ModalBackDrop/ModalBackDrop';
import {
  spinnerSelector,
  errorSelector,
  subscrSelectors,
} from '../../../redux/selectors';
import { subscrOperations } from '../../../redux/operations';
import style from './Subscriptions.module.css';

const types = ['Noob', 'Basic', 'Standart', 'Premium', 'Ultra'];

const ChoiceType = props => {
  const { changeType, isLoading, error } = props;
  const onSelectType = async e => {
    const request = { plan: e.target.dataset.type };
    const response = await changeType(request);

    if (response.status >= 400) {
      return;
    }
    props.closeModal();
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
              onClick={onSelectType}
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

const mapDispatchToProps = dispatch => ({
  changeType: type => dispatch(subscrOperations.changeType(type)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(modalBackDrop(ChoiceType));
