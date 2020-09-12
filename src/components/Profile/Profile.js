import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import style from "./Profile.module.css";
import { ReactComponent as OpenedEye } from "../../assests/images/profile/openedEye.svg";
import { ReactComponent as ClosedEye } from "../../assests/images/profile/closedEye.svg";

import avatar1 from "../../assests/images/avatars/Avatar-7.png";

const user = {
  avatar: `${avatar1}`,
  firstname: "Anna",
  lastname: "Vygovska",
  phone: "38 050 545 06 52",
  email: "pillowforneedles@gmail.com",
};

class Profile extends Component {
  state = {
    inputPassword: {
      eyeOldPassword: false,
      eyeNewPassword: false,
      typePassword: "password",
      typeText: "text",
    },
  };

  onEyeIconOldPassword = () => {
    this.setState((prevState) => ({
      eyeOldPassword: !prevState.inputPassword.eyeOldPassword,
    }));
  };
  onEyeIconNewPassword = () => {
    this.setState(
      (prevState) =>
        (this.state.inputPassword.eyeNewPassword = !prevState.inputPassword
          .eyeNewPassword)
    );
  };

  render() {
    const {
      eyeOldPassword,
      eyeNewPassword,
      typePassword,
      typeText,
    } = this.state.inputPassword;

    return (
      <>
        <div className={style.container}>
          <div className={style.wrapperHeader}>
            <h2 className={style.title}>Личный кабинет</h2>
          </div>

          <div className={style.wrapperMain}>
            <h3 className={style.titleInfo}>Личная информация</h3>

            <div className={style.wrapperForm}>
              <div className={style.wrapperFirstColumn}>
                <form className={style.form}>
                  <label className={style.label}>
                    <span className={style.titleInput}>Имя</span>
                    <input name="firstname" className={style.input} />
                  </label>
                  <label className={style.label}>
                    <span className={style.titleInput}>Фамилия</span>
                    <input name="lastname" className={style.input} />
                  </label>
                  <label className={style.label}>
                    <span className={style.titleInput}>Телефон</span>
                    <input name="phone" className={style.input} />
                  </label>
                  <label className={style.label}>
                    <span className={style.titleInput}>E-mail</span>
                    <input name="email" className={style.input} />
                  </label>
                  <button type="submit" className={style.btnSaveChange}>
                    Сохранить изменения
                  </button>
                </form>
                <button
                  onClick={this.onEyeIconNewPassword}
                  className={style.buttonChangePassword}
                >
                  Изменить пароль
                </button>
              </div>

              <div className={style.wrapperSecondColumn}>
                <NavLink
                  exact
                  className={style.avatarWrapper}
                  to="/profile/avatar"
                >
                  <img
                    src={user.avatar}
                    alt="avatar"
                    width="108"
                    higth="108"
                    className={style.avatar}
                  />
                </NavLink>
                <NavLink
                  exact
                  className={style.editAvatar}
                  to="/profile/avatar"
                >
                  Выбрать другой аватар
                </NavLink>
                <div className={style.subscription}>
                  <span className={style.subscriptionName}>Basic</span>
                </div>
                <button className={style.button}>Изменить подписку</button>
              </div>
            </div>

            <form className={style.form}>
              <label className={style.label}>
                <span className={style.titleInput}>Текущий пароль</span>
                <div
                  className={style.eyeImage}
                  onClick={this.onEyeIconOldPassword}
                >
                  {!eyeOldPassword ? <ClosedEye /> : <OpenedEye />}
                </div>
                <input
                  type={!eyeOldPassword ? typePassword : typeText}
                  name="password"
                  className={style.input}
                />
              </label>

              <label className={style.label}>
                <span className={style.titleInput}>Новый пароль</span>

                <div
                  className={style.eyeImage}
                  onClick={this.onEyeIconNewPassword}
                >
                  {!eyeNewPassword ? <ClosedEye /> : <OpenedEye />}
                </div>

                <input
                  type={!eyeNewPassword ? typePassword : typeText}
                  name="password"
                  className={style.input}
                />
              </label>

              <button type="submit" className={style.btnSaveChange}>
                Сохранить пароль
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default Profile;
