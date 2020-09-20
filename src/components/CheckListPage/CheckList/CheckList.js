import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './CheckList.module.css';
import CheckListItem from './CheckListItem/CheckListItem';

class CheckList extends Component {
  render() {
    return (
      <div className={style.checkList}>
        {this.props.habits
          ? this.props.habits.map(habit => (
              <CheckListItem
                key={habit._id}
                habit={habit}
                // onClick={(e) => this.showFullInfo(e)}
              />
            ))
          : 'No habits added'}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    habits: state.habits.allHabits,
  };
};

export default connect(mapStateToProps)(CheckList);
