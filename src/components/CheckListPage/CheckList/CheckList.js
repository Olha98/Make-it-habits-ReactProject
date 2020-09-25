import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './CheckListTransition.module.css';
import { spinnerSelector } from '../../../redux/selectors';
import Spinner from '../../Spinner/Spinner';
import style from './CheckList.module.css';
import CheckListItem from './CheckListItem/CheckListItem';

class CheckList extends Component {
  state = {
    isNew: false,
  };

  componentDidMount() {
    this.setState({
      isNew: true,
    });
  }

  render() {
    return (
      <div className={style.checkList}>
        {this.props.isLoading && <Spinner />}
        <TransitionGroup className={style.checkListWrapper}>
          {this.props.habits
            ? this.props.habits.map((habit, index) => (
                <CSSTransition
                  key={habit._id}
                  in={this.props.isNew}
                  timeout={250}
                  classNames={styles}
                  unmountOnExit
                >
                  <CheckListItem key={habit._id} habit={habit} index={index} />
                </CSSTransition>
              ))
            : 'No habits added'}
        </TransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    habits: state.habits.currentHabits.reverse(),
    isLoading: spinnerSelector.isLoading(state),
  };
};

export default connect(mapStateToProps)(CheckList);
