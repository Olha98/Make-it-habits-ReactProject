import React from 'react';
import { connect } from 'react-redux';
import { cardsSelectors } from '../../redux/selectors';
import { cardsOperations } from '../../redux/operations';

const CardListItem = ({ name, number, onRemove }) => {
  return (
    <li className={styles.item}>
      <span className={styles.name}>{name}</span>
      <span className={styles.number}>{number}</span>
      <button className={styles.btnDel} type="button" onClick={onRemove}>
        &times;
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CardListItem);
