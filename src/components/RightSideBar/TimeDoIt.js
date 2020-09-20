import React from 'react';
import { connect } from 'react-redux';
import TaskDoItItem from './TaskDiItItem';

const TimeDoIt = ({ currentHabits }) => {

  
  return (
    <ul>
      {currentHabits &&
        currentHabits.map(currentHabit => (
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
