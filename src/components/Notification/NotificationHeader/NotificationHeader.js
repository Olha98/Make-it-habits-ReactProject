import React from 'react';
import { connect } from 'react-redux';
import style from './NotificationHeader.module.css';
import leftSideBarSelectors from '../../../redux/selectors/leftSideBarSelectors';

const NotificationHeader = ({ number }) => {
  return (
    <>
      <div className={style.notificationHeader}>
        <p className={style.notificationTitle}>Уведомления</p>
        <p className={style.notificationCounter}>
          <span className={style.notificationCounter_number}>{number}</span>
          новых
        </p>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  const navNot = leftSideBarSelectors.allNotifications(state);
  console.log(navNot);

  return {
    number: navNot.length,
  };
};
export default connect(mapStateToProps)(NotificationHeader);
