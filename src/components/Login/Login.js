import React, { Component } from "react";
import styles from "./Login.module.css";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assests/images/Home/logo/MakeitHabitblack.svg";
import { ReactComponent as Svg } from "../../assests/images/Home/logo/Subtract.svg";
import authOperation from "../../redux/operations/authOperation";

class Login extends Component {
  state = {
    login: "",
    password: "",
  };

  handleName = (e) => {
    this.setState({ login: e.target.value });
  };

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  hendleSubmit = (e) => {
    e.preventDefault();
    const { login, password } = this.state;
    let OneUser = { login, password };
    this.props.onLogin(OneUser);
    this.setState({ login: "", password: "" });
  };

  render() {
    const { login, password } = this.state;

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
        <form className={styles.LoginForm}>
          <div className={styles.LoginInputForm}>
            <p className={styles.LoginInputTxt}>Логин</p>
            <input
              className={styles.LoginInput}
              value={login}
              onChange={(e) => this.handleName(e)}
              type="name"
              placeholder="Введите свой ник"
              name="name"
            />
          </div>
          <div className={styles.LoginInputForm}>
            <p className={styles.LoginInputTxt}>Пароль</p>
            <input
              className={styles.LoginInput}
              value={password}
              onChange={(e) => this.handlePassword(e)}
              type="password"
              placeholder="Введите пароль"
              name="password"
            />
          </div>
          <div className={styles.LoginButtonBlock}>
            <button className={styles.LoginButton}>
              <p className={styles.LoginButtonTxt}>Войти</p>
            </button>
          </div>
        </form>
        <div className={styles.LoginButtonBlock}>
          <button className={styles.LoginButton}>
            <p className={styles.LoginButtonTxt}>Регистрация</p>
          </button>
        </div>
      </div>
    );
  }
}
const mapDispachToProps = { onLogin: authOperation.userLogin };

export default connect(null, mapDispachToProps)(Login);
