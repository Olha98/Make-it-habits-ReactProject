import React from "react";
import { connect } from "react-redux";
import leftSideBarSelectors from "../../../redux/selectors/leftSideBarSelectors";
import style from "./HabitItem.module.css";
const colors = [
  "#f8c102",
  "#fe6083",
  " #b469fa",
  "#655de6",
  "#f8c102",
  "#fe6083",
  " #b469fa",
  "#655de6",
  "#f8c102",
  "#fe6083",
  " #b469fa",
  "#655de6",
  "#f8c102",
  "#fe6083",
  " #b469fa",
  "#655de6",
  "#f8c102",
  "#fe6083",
  " #b469fa",
  "#655de6",
];
const HabitItem = (habit, idx) => {
  console.log("idx", idx);
  return (
    <>
      <li className={style.leftSideBar_habits__list_item}>
        <div
          style={{ backgroundColor: colors[habit.idx] }}
          className={style.leftSideBar_habits__list_item_circle}
        ></div>
        <p className={style.leftSideBar_habits__list_item_habit}>
          {habit.name}
        </p>
      </li>
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
  const habit = leftSideBarSelectors.getHabitById(state, ownProps.id);
  return {
    ...habit,
    habits: leftSideBarSelectors.listOfHabits(state),
  };
};
export default connect(mapStateToProps)(HabitItem);
