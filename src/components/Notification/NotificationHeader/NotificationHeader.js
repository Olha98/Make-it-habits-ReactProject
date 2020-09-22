import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './NotificationHeader.module.css';
import leftSideBarSelectors from '../../../redux/selectors/leftSideBarSelectors';

class NotificationHeader extends Component {
  state = {
    // isShowNotify: false,
    number: this.props.number,
  };
  componentDidMount() {
    localStorage.setItem('notification', 0);
    this.setState({
      number: 0,
    });
  }
  // componentDidUpdate() {
  //   localStorage.setItem('notification', 0);
  // }
  render() {
    // ({ number }) => {
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
  // console.log(navNot);

  return {
    number: navNot && navNot.length,
  };
};
export default connect(mapStateToProps)(NotificationHeader);
