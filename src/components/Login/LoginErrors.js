import React, { Component } from 'react';
import styles from './Login.module.css';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assests/images/Home/logo/MakeitHabitblack.svg';
import { ReactComponent as Svg } from '../../assests/images/Home/logo/Subtract.svg';

// * Импорт компонентов с сообщением об ошибке и спинером + селеторы для пропов
import ErrorNotification from '../ErrorNotification/ErrorNotification';
import Spinner from '../Spinner/Spinner';
import { errorSelector, spinnerSelector } from '../../redux/selectors';

import authOperation from '../../redux/operations/authOperation';
import { ReactComponent as OpenedEye } from '../../assests/images/profile/openedEye.svg';
import { ReactComponent as ClosedEye } from '../../assests/images/profile/closedEye.svg';

class Login extends Component {
  state = {
    email: 'OlhaGrim@gmail.com',
    password: 'OlhaGrim',
    passwordVisible: false,
  };

  onEyeIconOldPassword = name => {
    this.setState({ [name]: !this.state[name] });
  };

  handleEmail = e => {
    this.setState({ email: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  hendleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    let OneUser = { email, password };
    this.props.onLogin(OneUser);
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password, passwordVisible } = this.state;
    const { btnClose, isLoading, error } = this.props;
    // * Здесь можем добавить своё сообщение об ошибке и передать в пропы ErrorNotification
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
    return (
      <div className={styles.Login}>
        <div className={styles.HomeLogo}>
          <div className={styles.HomeLogoSvg}>
            <div className={styles.HomeLogoPng}>
              <Svg />
            </div>
          </div>
          <Logo />
        </div>
        <p className={styles.LoginHi}>C возвращением!</p>
        <p className={styles.LoginTxt}>
          Введите свои данные, чтобы продолжить использовать наше приложение
        </p>
        {/* 
        // * Здесь добавляем спинер и сообщение об ошибке 
        */}
        {isLoading && <Spinner />}
        {error && <ErrorNotification message={message} />}
        <form onSubmit={this.hendleSubmit} className={styles.LoginForm}>
          <div className={styles.LoginInputForm}>
            <p className={styles.LoginInputTxt}>E-mail</p>
            <input
              className={styles.LoginInput}
              value={email}
              onChange={e => this.handleEmail(e)}
              type="email"
              placeholder="Введите свой E-mail"
              name="email"
              required
            />
          </div>
          <div className={styles.LoginInputForm}>
            <p className={styles.LoginInputTxt}>Пароль</p>
            <label className={styles.LoginPassword}>
              <div
                onClick={() => this.onEyeIconOldPassword('passwordVisible')}
                className={styles.LoginPasswordBtn}
              >
                {!passwordVisible ? <ClosedEye /> : <OpenedEye />}
              </div>

              <input
                className={styles.LoginInput}
                value={password}
                onChange={e => this.handlePassword(e)}
                type={!passwordVisible ? 'password' : 'text'}
                placeholder="Введите пароль"
                name="password"
                required
                minLength="6"
              />
            </label>
          </div>
          <div className={styles.LoginButtonBlock}>
            <button className={styles.LoginButton}>
              <p className={styles.LoginButtonTxt}>Войти</p>
            </button>
          </div>
        </form>
        <div className={styles.LoginButtonBlock}>
          <button className={styles.LoginButton} onClick={btnClose}>
            <p className={styles.LoginButtonTxt}>Регистрация</p>
          </button>
        </div>
      </div>
    );
  }
}

// * добавляем пропы с ошибкой и спинером
const mapStateToProps = state => ({
  isLoading: spinnerSelector.isLoading(state),
  error: errorSelector.getError(state),
});

const mapDispachToProps = {
  onLogin: authOperation.userLogin,
};

// * здесь был null 1-м аргументом - меняем на mapStateToProps
export default connect(mapStateToProps, mapDispachToProps)(Login);
