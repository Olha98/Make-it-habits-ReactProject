import React from 'react';
import { connect } from 'react-redux';
import leftSideBarSelectors from '../../../redux/selectors/leftSideBarSelectors';
import style from './HabitItem.module.css';
import { colors } from './utils';

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
