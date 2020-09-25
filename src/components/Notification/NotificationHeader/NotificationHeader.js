import React, { Component } from 'react';
import { connect } from 'react-redux';
import leftSideBarSelectors from '../../../redux/selectors/leftSideBarSelectors';
import style from './NotificationHeader.module.css';

class NotificationHeader extends Component {
  state = {
    number: this.props.number,
  };
  componentDidMount() {
    localStorage.setItem('notification', 0);
    this.setState({
      number: 0,
    });
  }
  render() {
    return (
      <>
        <div className={style.notificationHeader}>
          <p className={style.notificationTitle}>Уведомления</p>
          <p className={style.notificationCounter}>
            <span className={style.notificationCounter_number}>
              {this.props.number}
            </span>
            новых
          </p>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  const navNot = leftSideBarSelectors.allNotifications(state);
  return {
    number: navNot && navNot.length,
  };
};
export default connect(mapStateToProps)(NotificationHeader);
