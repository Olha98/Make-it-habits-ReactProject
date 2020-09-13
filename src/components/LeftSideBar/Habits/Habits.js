import React from "react";
import { connect } from "react-redux";
import leftSideBarSelectors from "../../../redux/selectors/leftSideBarSelectors";
import HabitItem from "../HabitItem/HabitItem";
import style from "./Habits.module.css";
import { NavLink } from "react-router-dom";

const Habits = ({ habits }) => {
  return (
    <>
      <section className={style.leftSideBar_habits}>
        <h3 className={style.leftSideBar_habits_title}>Привычки</h3>

        <ul className={style.leftSideBar_habits__list}>
          {habits.map(({ id }, idx) => (
            <HabitItem key={id} id={id} idx={idx} />
          ))}
        </ul>
        <NavLink
          to="/CustomHabitModal"
          className={style.leftSideBar_habits__button}
        >
          Добавить привычку +
        </NavLink>
      </section>
    </>
  );
};
const mapStateToProps = (state) => ({
  habits: leftSideBarSelectors.listOfHabits(state),
});
export default connect(mapStateToProps)(Habits);
