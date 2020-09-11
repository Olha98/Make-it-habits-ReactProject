import React from "react";
import { avatar } from "../../../assests/images/LeftSideBar";
import { style } from "./UserInfo.module.css";
export default function UserInfo() {
  return (
    <>
      <section className={style.leftSideBar_userInfo}>
        <div className={style.leftSideBar_userInfo__avatar}>
          <img
            // className={leftSideBar_userInfo__avatar__img}
            src={avatar}
            alt="avatar"
          />
        </div>
        <p className={style.leftSideBar_userInfo__name}>Tima Vovchenko</p>
        <button className={style.leftSideBar_userInfo__button}>Logout</button>
      </section>
    </>
  );
}
