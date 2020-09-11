import { now } from "moment";
import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import style from "./RightSideBar.module.css";
import Example from "./Calendar";

class RightSideBar extends Component {
  state = {
    dataNow: "",
  };

  render() {
    return (
      <div className={style.containerRightSideBar}>
        <div className={style.headerRightSideBar}>
          
        </div>
        <div className={style.bodyRightSideBar}>
          <Example />
        </div>
        <div className={style.footerRightSideBar}></div>
      </div>
    );
  }
}

export default RightSideBar;
