import React, { Component } from 'react';
import { connect } from 'react-redux';
import { spinnerSelector } from '../../../redux/selectors';
import { CSSTransition } from 'react-transition-group';
import styles from './CheckListTransition.module.css';

import Spinner from '../../Spinner/Spinner';
import style from './CheckList.module.css';
import CheckListItem from './CheckListItem/CheckListItem';

class CheckList extends Component {
  render() {
    return (
      <div className={style.checkList}>
        <div className={style.checkListWrapper}>
          {this.props.isLoading && <Spinner />}
          {this.props.habits
            ? this.props.habits.reverse().map((habit, index) => (
                // habit.efficiency !== 100 &&
                <CSSTransition
                  key={habit._id}
                  in={true}
                  timeout={500}
                  classNames={styles}
                  unmountOnExit
                >
                  <CheckListItem key={habit._id} habit={habit} index={index} />
                </CSSTransition>
              ))
            : 'No habits added'}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    habits: state.habits.currentHabits,
    isLoading: spinnerSelector.isLoading(state),
  };
};

export default connect(mapStateToProps)(CheckList);
