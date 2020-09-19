import React from 'react';
import { connect } from 'react-redux';
import TaskDoItItem from './TaskDiItItem';

const TimeDoIt = ({ userHabits }) => {
  return (
    <ul>
      {userHabits &&
        userHabits.map(userHabit => (
          <TaskDoItItem userHabit={userHabit} key={userHabit._id} />
        ))}
    </ul>
  );
};

const mapStateToProps = function (state) {
  return {
    userHabits: state.user.habits,
  };
};

export default connect(mapStateToProps)(TimeDoIt);
