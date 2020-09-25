import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { cardsSelectors } from '../../redux/selectors';
import CardListItem from './CardListItem';
import styles from './Card.module.css';
import fadeStyles from './fade.module.css';

const CardList = ({ items }) => {
  const countItems = items.length;
  // const timeout = 250 + 50 * (countItems - 1);
  items.sort((a, b) => (a.ordinalNumber > b.ordinalNumber ? 1 : -1));
  return (
    <TransitionGroup component="ul" className={styles.listCards}>
      {items.map((item, index) => (
        <CSSTransition key={item.id} timeout={250} classNames={fadeStyles}>
          <CardListItem id={item.id} index={index} count={countItems} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const mapStateToProps = state => ({
  items: cardsSelectors.getCards(state).slice(1),
});

export default connect(mapStateToProps)(CardList);
