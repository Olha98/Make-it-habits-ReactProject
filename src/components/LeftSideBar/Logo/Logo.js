import React from "react";
import { logo } from "../../../assests/images/LeftSideBar";
import { style } from "./Logo.module.css";
export default function Logo() {
  return (
    <>
      <section className={style.logo}>
        <div>
          <div>
            <img src={logo} alt="logo" width="146" />
          </div>
        </div>
      </section>
    </>
  );
}

/* <>
<section className="logo">
  <div className="leftSideBar-wrapper">
    <div className="leftSideBar-logo">
      <img
        src=""
        alt="logo"
        width="146"
        className="leftSideBar-logo__img"
      />
    </div>
  </div>
</section>
</> */
