import React, { Component } from 'react';
import { connect } from 'react-redux';
import leftSideBarSelectors from '../../../redux/selectors/leftSideBarSelectors';
import NotificationListItem from '../NotificationListItem/NotificationListItem';
import style from './NotificationList.module.css';

class NotificationList extends Component {
  render() {
    return (
      this.props.getName && (
        <ul className={style.NotificationList}>
          {this.props.getName.map((name, idx) => (
            <NotificationListItem key={idx} name={name} />
          ))}
        </ul>
      )
    );
  }
}

const mapStateToProps = state => {
  const listOfHabits = leftSideBarSelectors.listOfHabits(state);

  const allNotifications = listOfHabits.filter(({ data, name }) => {
    const isAllTrue = data.every(bool => bool);

    if (isAllTrue) {
      return {
        [name]: data.name,
      };
    }
    return '';
  });

  const getName = allNotifications.map(el => el.name);
  console.log('getName', getName);
  return {
    getName: getName,
    allNotifications: leftSideBarSelectors.listOfHabits(state),
  };
};
export default connect(mapStateToProps)(NotificationList);
