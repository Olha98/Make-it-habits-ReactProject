import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CardListItem from './CardListItem';

const CardList = ({ items }) => {
  return (
    <TransitionGroup component="ul">
      {items.map((item, index) => (
        <CSSTransition key={item.id} timeout={timeout} classNames={fadeStyles}>
          <CardListItem id={item.id} index={index} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const mapStateToProps = state => ({
  items: contactsSelectors.getFilteredContacts(state),
});

export default connect(mapStateToProps)(CardList);
