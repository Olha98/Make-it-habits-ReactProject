import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { errorSelector } from '../../redux/selectors';
import { errorActions } from '../../redux/actions';
import styles from './ErrorNotification.module.css';

const ErrorNotification = ({ error }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(errorActions.hideError());
  }, []);
  let message = '';
  if (error?.data === 'Password is not equal') {
    message = 'Неверный пароль';
  } else if (
    // " "password" must has min 8 symbols, max 16 symbols, only digital letters and literal letters"
    error?.data.indexOf('must has min 8 symbols') !== -1
  ) {
    message = 'Пароль должен содержать 8-16 символов, только буквы и цифры';
  } else if (error?.data === `"email" must has type as example@mail.com`) {
    message = 'Неверный формат email - пример валидного: example@mail.com';
  } else if (error?.data.indexOf('User with email') !== -1) {
    message = 'Пользователь с таким email не зарегистрирован';
  }
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
