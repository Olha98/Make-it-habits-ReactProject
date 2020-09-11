import React, { Component } from "react";
import style from "./Profile.module.css";

import avatar1 from "../../assests/images/avatars/Avatar-7.png";

const user = {
  avatar: `${avatar1}`,
  firstname: "Anna",
  lastname: "Vygovska",
  phone: "38 050 545 06 52",
  email: "pillowforneedles@gmail.com",
};

class Profile extends Component {
  render() {
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
                <button className={style.buttonChangePassword}>
                  Изменить пароль
                </button>
              </div>

              <div className={style.wrapperSecondColumn}>
                <div className={style.avatarWrapper}>
                  <img
                    src={user.avatar}
                    alt="avatar"
                    width="108"
                    higth="108"
                    className={style.avatar}
                  />
                </div>
                <span className={style.editAvatar}>Выбрать другой аватар</span>
                <span className={style.subscription}>Basic</span>
                <button className={style.button}>Изменить подписку</button>
              </div>
            </div>

            <form className={style.form}>
              <label className={style.label}>
                <span className={style.titleInput}>Текущий пароль</span>
                <input name="password" className={style.input} />
              </label>
              <label className={style.label}>
                <span className={style.titleInput}>Новый пароль</span>
                <input name="password" className={style.input} />
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
