import React from "react";
import Logo from "./Logo/Logo";
import UserInfo from "./UserInfo/UserInfo";
import Economizing from "./Economizing/Economizing";
import Habits from "./Habits/Habits";
import InnerNavigation from "./InnerNavigation/InnerNavigation";
//import InnerNavigation from "./InnerNavigation/InnerNavigation";

export default function LeftSideBar() {
  return (
    <div>
      <Logo />
      <UserInfo />
      <Economizing />
      <InnerNavigation />
      <Habits />
    </div>
  );
}
