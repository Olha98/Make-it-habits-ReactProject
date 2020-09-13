import React from "react";
import { connect } from "react-redux";
import leftSideBarSelectors from "../../../redux/selectors/leftSideBarSelectors";
import HabitItem from "../HabitItem/HabitItem";
import style from "./Habits.module.css";

const Habits = ({ habits }) => {
  return (
    <>
      <section className={style.leftSideBar_habits}>
        <h3 className={style.leftSideBar_habits_title}>Привычки</h3>

        <ul className={style.leftSideBar_habits__list}>
          {habits.map(({ id }) => (
            <HabitItem id={id} />
          ))}
        </ul>
        <button className={style.leftSideBar_habits__button}>
          Добавить привычку +
        </button>
      </section>
    </>
  );
};
const mapStateToProps = (state) => ({
  habits: leftSideBarSelectors.listOfHabits(state),
});
export default connect(mapStateToProps)(Habits);
