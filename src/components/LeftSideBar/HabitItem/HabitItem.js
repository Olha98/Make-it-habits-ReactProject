import React from "react";
import { connect } from "react-redux";
import leftSideBarSelectors from "../../../redux/selectors/leftSideBarSelectors";
import style from "./HabitItem.module.css";

const colors = [
  "#f8c102",
  "#f79533",
  "#f37055",
  "#fe6083",
  "#ef4e7b",
  "#a166ab",
  "#b469fa",
  "#655de6",
  "#5073b8",
  "#1098ad",
  "#07b39b",
  "#6fba82",
  "#f8c102",
  "#f79533",
  "#f37055",
  "#fe6083",
  "#ef4e7b",
  "#a166ab",
  "#b469fa",
  "#655de6",
  "#5073b8",
  "#1098ad",
  "#07b39b",
  "#6fba82",
  "#f8c102",
  "#f79533",
  "#f37055",
  "#fe6083",
  "#ef4e7b",
  "#a166ab",
  "#b469fa",
  "#655de6",
  "#5073b8",
  "#1098ad",
  "#07b39b",
  "#6fba82",
];
const HabitItem = (habit, idx) => {
  return (
    <li className={style.leftSideBar_habits__list_item}>
      <div
        style={{
          background: `linear-gradient(60deg, ${colors[habit.idx]}, ${
            colors[habit.idx + 1]
          })`,
        }}
        className={style.leftSideBar_habits__list_item_circle}
      />
      <p className={style.leftSideBar_habits__list_item_habit}>{habit.name}</p>
    </li>
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
