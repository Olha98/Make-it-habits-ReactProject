import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import style from "./RightSideBar.module.css";
import Calendar from "./Calendar";
import TimeDoIt from "./TimeDoIt";
import moment from "moment";
import "moment/locale/ru";

const task = [
  {
    createAt: "2020-09-07T01:07:23.330Z",
    data: [null, null, null],
    planningTime: "14.00",
    efficiency: 20,
    id: "5f4d9edf6375b430bda8ce92",
    name: "My Habit1",
    iteration: "everyday",
  },

  {
    createAt: "2020-10-21T01:07:23.330Z",
    data: [null, null, null],
    planningTime: "10",
    efficiency: 50,
    id: "5f4d9edf6375b430bda8ce92",
    name: "My Habitqfadvsbsfbdsbddf",
    iteration: "onceADay",
  },

  {
    createAt: "2020-14-06T01:07:23.330Z",
    data: [null, null, null],
    planningTime: "10",
    efficiency: 50,
    id: "5f4d9edf6375b430bda8ce92",
    name: "My Habit1sbfbsvsknldsknvlnl fhsfhud",
    iteration: "onceInTwoDays",
  },

  {
    createAt: "2020-14-01T01:07:23.330Z",
    data: [null, null, null],
    planningTime: "10",
    efficiency: 50,
    id: "5f4d9edf6375b430bda8ce92",
    name: "My Habit dv vudfhc ugdfiu",
    iteration: "MonWedFri",
  },

  {
    createAt: "2020-14-11T01:07:23.330Z",
    data: [null, null, null],
    planningTime: "10",
    efficiency: 50,
    id: "5f4d9edf6375b430bda8ce92",
    name: "My Habit dv vudfhc ugdfiu",
    iteration: "TueThuSat",
  },
];

console.log(task);

class RightSideBar extends Component {
  state = {
    dayWeek: moment().format("dddd"),
    getData: moment().format('LL').split(' ').slice(0,2),

  };


  render() {
    const { dayWeek, getData } = this.state;
    console.log(this.state);
    return (
      <div className={style.boxRightSideBar}>
        <div className={style.containerRightSideBar}>
          <div className={style.headerRightSideBar}>
            <div className={style.headerRightSideBarBox}>
              <span>{dayWeek}</span>
              <span>&#183;</span>
           <span>{getData.join()}</span>
            </div>
          </div>
          <div className={style.bodyRightSideBar}>
            <Calendar />
          </div>
          <div className={style.footerRightSideBar}>
            <TimeDoIt />
          </div>
        </div>
      </div>
    );
  }
}

export default RightSideBar;
