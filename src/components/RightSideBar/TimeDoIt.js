import React from 'react';
import { connect } from 'react-redux';
import TaskDoItItem from './TaskDiItItem';


const TimeDoIt = ({ currentHabits }) => {
  const newCurrent = currentHabits
    .map(item => {
      return {
        ...item,
        timeNow: new Date(item.planningTime).getHours(),
      };
    })
    .sort((a, b) => a.timeNow - b.timeNow);

  return (
    <ul>
      {newCurrent &&
        newCurrent.map(currentHabit => (
          <TaskDoItItem currentHabit={currentHabit} key={currentHabit._id}/>
        ))}
    </ul>
  );
};

const mapStateToProps = function (state) {
  return {
    currentHabits: state.habits.currentHabits,
  };
};

export default connect(mapStateToProps)(TimeDoIt);
