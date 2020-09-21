import React from 'react';
import { connect } from 'react-redux';
import TaskDoItItem from './TaskDiItItem';
import moment from 'moment';

const TimeDoIt = ({ currentHabits }) => {
  const newCurrent = currentHabits
    .map(item => {
      return {
        ...item,
        timeNow: new Date(item.planningTime).getTime(),
      };
    })
    .sort((a, b) => a.timeNow - b.timeNow);

  // console.log(newCurrent, 'newCurrent');

 

  return (
    <ul>
      {newCurrent &&
        newCurrent.map(currentHabit => (
          <TaskDoItItem currentHabit={currentHabit} key={currentHabit._id} />
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
