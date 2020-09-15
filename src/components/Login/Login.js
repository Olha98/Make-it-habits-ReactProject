import React, { Component } from "react";
import styles from "./Login.module.css";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assests/images/Home/logo/MakeitHabitblack.svg";
import { ReactComponent as Svg } from "../../assests/images/Home/logo/Subtract.svg";
import authOperation from "../../redux/operations/authOperation";

class Login extends Component {
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
    // console.log(this.state, "this");
    const { email, password } = this.state;
    let OneUser = { email, password };
    // console.log(OneUser, "login");
    this.props.onLogin(OneUser);
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

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
        <form onSubmit={this.hendleSubmit} className={styles.LoginForm}>
          <div className={styles.LoginInputForm}>
            <p className={styles.LoginInputTxt}>E-mail</p>
            <input
              className={styles.LoginInput}
              value={email}
              onChange={(e) => this.handleEmail(e)}
              type="email"
              placeholder="Введите свой E-mail"
              name="email"
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
