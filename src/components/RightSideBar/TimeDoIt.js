import React from "react";
import  TaskDoItItem from './TaskDiItItem'

const TimeDoIt = ({ task }) => {
	
  return (
    <ul>
      {task.map((task) => (
        <TaskDoItItem task={task} key={task.createAt}/>
      ))}
    </ul>
  );
};

export default TimeDoIt;
