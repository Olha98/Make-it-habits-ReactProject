import { now } from "moment";
import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import style from "./RightSideBar.module.css";
import Example from "./Calendar";

var moment = require("moment");
// const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

// module.exports = {
//   plugins: [
//     // To strip all locales except “en”
//     new MomentLocalesPlugin(),

//     // Or: To strip all locales except “en”, “es-us” and “ru”
//     // (“en” is built into Moment and can’t be removed)
//     new MomentLocalesPlugin({
//       localesToKeep: ["es-us", "ru"],
//     }),
//   ],
// };
class RightSideBar extends Component {
  state = {
    dateNow: moment().format("dddd"),
  };

  render() {
    console.log(this.state, "state");
    return (
      <div className={style.containerRightSideBar}>
        <div className={style.headerRightSideBar}>
          <span></span>
        </div>
        {/* <div className={style.bodyRightSideBar}>
          <Example />
        </div>  */}
        {/* <div className={style.footerRightSideBar}></div> */}
      </div>
    );
  }
}

export default RightSideBar;
