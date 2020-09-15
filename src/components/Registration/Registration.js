import React, { Component } from "react";
import styles from "./Registration.module.css";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assests/images/Home/logo/MakeitHabitblack.svg";
import { ReactComponent as Svg } from "../../assests/images/Home/logo/Subtract.svg";
import authOperation from "../../redux/operations/authOperation";

class Registration extends Component {
  state = {
    email: "",
    password: "",
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  hendleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    let NewUser = { email, password };
    this.props.onReegistration(NewUser);
    this.setState({ login: "", email: "", password: "" });
  };

  render() {
    const {  email, password } = this.state;

    return (
      <div className={styles.Registration}>
        <div className={styles.RegistrationLogo}>
          <div className={styles.RegistrationLogoSvg}>
            <div className={styles.RegistrationLogoPng}>
              <Svg />
            </div>
          </div>
          <Logo />
        </div>
        <p className={styles.RegistrationHi}>Добро пожаловать!</p>
        <p className={styles.RegistrationTxt}>
          Введите свои данные, чтобы продолжить использовать наше приложение
        </p>
        <form onSubmit={this.hendleSubmit} className={styles.RegistrationForm}>
          <div className={styles.RegistrationInputForm}>
            <p className={styles.RegistrationInputTxt}>E-mail</p>
            <input
              className={styles.RegistrationInput}
              value={email}
              onChange={(e) => this.handleEmail(e)}
              type="email"
              placeholder="Введите свой E-mail"
              name="email"
            />
          </div>
          <div className={styles.RegistrationInputForm}>
            <p className={styles.RegistrationInputTxt}>Пароль</p>
            <input
              className={styles.RegistrationInput}
              value={password}
              onChange={(e) => this.handlePassword(e)}
              type="password"
              placeholder="Придумайте пароль"
              name="password"
            />
          </div>
          <div className={styles.RegistrationButtonBlock}>
            <button className={styles.RegistrationButton}>
              <p className={styles.RegistrationButtonTxt}>Регистрация</p>
            </button>
          </div>
        </form>
        <div className={styles.RegistrationButtonBlock}>
          <button className={styles.RegistrationButton}>
            <p className={styles.RegistrationButtonTxt}>Войти</p>
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = { onReegistration: authOperation.userRegistration };

export default connect(null, mapDispatchToProps)(Registration);
