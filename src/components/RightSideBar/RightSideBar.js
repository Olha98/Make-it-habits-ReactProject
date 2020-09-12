
import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import style from "./RightSideBar.module.css";
import Calendar from "./Calendar";




class RightSideBar extends Component {
 

  render() {
  
    return (
      <div className={style.containerRightSideBar}>
        <div className={style.headerRightSideBar}>
          <div className={style.headerRightSideBarBox}>
          <span>Вторник</span>
          <span>&#183;</span>
          <span>2 сентября</span>
          </div>
        </div>
        <div className={style.bodyRightSideBar}><Calendar /></div>
        <div className={style.footerRightSideBar}></div>
      </div>
    );
  }
}

export default RightSideBar;
