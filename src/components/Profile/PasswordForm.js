import React, { Component } from "react";
import style from "./Profile.module.css";
// import { reduxForm, Field} from "redux-form";

import { ReactComponent as OpenedEye } from "../../assests/images/profile/openedEye.svg";
import { ReactComponent as ClosedEye } from "../../assests/images/profile/closedEye.svg";

class PasswordForm extends Component {
  state = {
    passwordOld: false,
    passwordNew: false,
    passwordNewRepeat: false,

    typePassword: "password",
    typeText: "text",

    passwordFields: false,

    // name: "",
    // value: "",
  };

  onEyeIconOldPassword = (name) => {
    // console.log("name", name);
    this.setState({ [name]: !this.state[name] });
  };

  render() {
    const {
      passwordOld,
      passwordNew,
      passwordNewRepeat,

      typePassword,
      typeText,
    } = this.state;

    return (
      <>
        <form className={style.form}>
          <label className={style.label}>
            <span className={style.titleInput}>Текущий пароль</span>
            <div
              className={style.eyeImage}
              onClick={() => this.onEyeIconOldPassword("passwordOld")}
            >
              {!passwordOld ? <ClosedEye /> : <OpenedEye />}
            </div>
            <input
              type={!passwordOld ? typePassword : typeText}
              name="passwordOld"
              onChange={this.handleChange}
              className={style.input}
            />
          </label>

          <label className={style.label}>
            <span className={style.titleInput}>Новый пароль</span>
            <div
              className={style.eyeImage}
              onClick={() => this.onEyeIconOldPassword("passwordNew")}
            >
              {!passwordNew ? <ClosedEye /> : <OpenedEye />}
            </div>
            <input
              type={!passwordNew ? typePassword : typeText}
              name="passwordNew"
              onChange={this.handleChange}
              className={style.input}
            />
          </label>

          <label className={style.label}>
            <span className={style.titleInput}>Повторите пароль</span>
            <div
              className={style.eyeImage}
              onClick={() => this.onEyeIconOldPassword("passwordNewRepeat")}
            >
              {!passwordNewRepeat ? <ClosedEye /> : <OpenedEye />}
            </div>
            <input
              type={!passwordNewRepeat ? typePassword : typeText}
              name="passwordNewRepeat"
              onChange={this.handleChange}
              className={style.input}
            />
          </label>

          <button type="submit" className={style.btnSaveChange}>
            Сохранить пароль
          </button>
        </form>
      </>
    );
  }
}
export default PasswordForm;
