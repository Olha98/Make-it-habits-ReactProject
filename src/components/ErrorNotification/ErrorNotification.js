import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { errorSelector } from '../../redux/selectors';
import { errorActions } from '../../redux/actions';
import styles from './ErrorNotification.module.css';

const ErrorNotification = ({ error, message = '' }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(errorActions.hideError());
  }, []);
  if (!message) {
    message = error.message;
  }

  return (
    <div className={styles.note}>
      <span className={styles.noteText}>Извините, произошла ошибка:</span>{' '}
      <span className={styles.noteError}>{message}</span>{' '}
    </div>
  );
};

const mapStateToProps = state => ({
  error: errorSelector.getError(state),
});

export default connect(mapStateToProps)(ErrorNotification);
