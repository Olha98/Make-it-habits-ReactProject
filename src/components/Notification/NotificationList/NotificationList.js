import React, { Component } from 'react';
import { connect } from 'react-redux';
import leftSideBarSelectors from '../../../redux/selectors/leftSideBarSelectors';
import NotificationListItem from '../NotificationListItem/NotificationListItem';
import style from './NotificationList.module.css';

class NotificationList extends Component {
  render() {
    return (
      this.props.allHabitsDone && (
        <ul className={style.NotificationList}>
          {this.props.allHabitsDone.map((name, idx) => (
            <NotificationListItem key={idx} name={name} />
          ))}
        </ul>
      )
    );
  }
}

const mapStateToProps = state => {
  const allHabitsDone = leftSideBarSelectors.allNotifications(state);
  const done = allHabitsDone.map(habit => habit.name);

  return {
    allHabitsDone: done,
  };
};

//const mapDisp
export default connect(mapStateToProps)(NotificationList);
