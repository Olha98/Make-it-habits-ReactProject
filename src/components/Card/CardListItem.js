import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Trash } from '../../assests/images/Card/trash.svg';
import { cardsSelectors } from '../../redux/selectors';
import { cardsActions } from '../../redux/actions';
import { cardsOperations } from '../../redux/operations';
import styles from './Card.module.css';

const colors = ['#b469fa', '#F8C102', '#43D190', '#FE6083', '#795548'];

const CardListItem = props => {
  const {
    number,
    timeExpiration,
    index,
    onRemove,
    id,
    onShuffle,
    count,
  } = props;
  return (
    <li
      className={styles.card}
      style={{
        width: `calc(100% - ${(count - 1 - index) * 15}px)`,
        height: `calc(100% - ${(count - 1 - index) * 10}px)`,
        top: `${(count - 1 - index) * 5}px`,
        left: `${(count - 1 - index) * 30}px`,
        backgroundColor: `${colors[(id - 2) % 5]}`,
        // zIndex: `-${index * 10}`,
        cursor: 'pointer',
        // transitionDelay: `${(count - 1 - index) * 50}ms`,
      }}
      onClick={onShuffle}
    >
      <p className={styles.cardName}>{`Моя карта ${index + 2}`}</p>
      <p className={styles.cardNumber}>{number}</p>
      <p className={styles.cardExpireDate}>Истекает {timeExpiration}</p>
      <button
        className={styles.cardDeleteButton}
        type="button"
        onClick={onRemove}
      >
        <Trash className={styles.trashIcon} />
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const item = cardsSelectors
    .getCards(state)
    .find(item => item.id === ownProps.id);
  return { ...item };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(cardsOperations.removeCard(ownProps.id)),
  onShuffle: () => dispatch(cardsActions.liftUpCardSuccess(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardListItem);
