import React, { Component } from 'react';
import { connect } from 'react-redux';
import { spinnerSelector } from '../../../redux/selectors';
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
            ? this.props.habits.map((habit, index) => (
                <CheckListItem key={habit._id} habit={habit} index={index} />
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
