import React from "react";
import { connect } from "react-redux";
import leftSideBarSelectors from "../../../redux/selectors/leftSideBarSelectors";
import style from "./HabitItem.module.css";

const HabitItem = ({ name }) => {
  return (
    <>
      <li className={style.leftSideBar_habits__list_item}>
        <div className={style.leftSideBar_habits__list_item_circle}></div>
        <p className={style.leftSideBar_habits__list_item_habit}>{name}</p>
      </li>
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
  const item = leftSideBarSelectors.getHabitById(state, ownProps.id);
  return { ...item };
};
export default connect(mapStateToProps)(HabitItem);
