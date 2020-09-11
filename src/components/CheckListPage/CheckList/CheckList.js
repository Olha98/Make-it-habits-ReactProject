import React, { Component } from "react";
import style from "./CheckList.module.css";
import CheckListItem from "./CheckListItem/CheckListItem";

class CheckList extends Component {
  constructor() {
    super();

    this.state = {
      habits: [
        {
          createAt: "2020-09-01T01:07:23.330Z",
          data: [null, null, null],
          planningTime: 0,
          efficiency: 70,
          _id: "5f4d9edf6375b430bda8ce92",
          name: "Утренняя зарядка 10-15 мин",
          iteration: "", //everyday, onceADay, onceInTwoDays, MonWedFri,TueThuSat,,
        },
        {
          createAt: "2020-09-01T01:07:23.330Z",
          data: [null, null, null],
          planningTime: 0,
          efficiency: 50,
          _id: "5f4d9edf6375b430bda8ce92",
          name: "Замена сигарет на леденцы, орешки и т.п.",
          iteration: "", //everyday, onceADay, onceInTwoDays, MonWedFri,TueThuSat,,
        },
        {
          createAt: "2020-09-01T01:07:23.330Z",
          data: [null, null, null],
          planningTime: 0,
          efficiency: 70,
          _id: "5f4d9edf6375b430bda8ce92",
          name: "Читать минимум 30 мин в день",
          iteration: "", //everyday, onceADay, onceInTwoDays, MonWedFri,TueThuSat,,
        },
      ],
    };
  }
  render() {
    return (
      <div className={style.checkList}>
        {this.state.habits
          ? this.state.habits.map((habit) => (
              <CheckListItem name={habit.name} efficiency={habit.efficiency} />
            ))
          : "No habits added"}
      </div>
    );
  }
}

export default CheckList;
