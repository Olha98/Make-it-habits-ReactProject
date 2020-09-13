import React from "react";
import Logo from "./Logo/Logo";
import UserInfo from "./UserInfo/UserInfo";
import Economizing from "./Economizing/Economizing";
import Habits from "./Habits/Habits";
import InnerNavigation from "./InnerNavigation/InnerNavigation";
//import InnerNavigation from "./InnerNavigation/InnerNavigation";
import style from "./LeftSideBar.module.css";
export default function LeftSideBar() {
  return (
    <div>
      <section className={style.leftSideBar}>
        <div className={style.leftSideBar_container}>
          <Logo />
          <UserInfo />
          <Economizing />
          <InnerNavigation />
          <Habits />
        </div>
      </section>
    </div>
  );
}
