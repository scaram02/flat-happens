import React from "react";
import Task from "./Task";

const UnassignedTasks = props => {
  console.log("TASKS", props.tasks);

  return (
    <div>
      <h1>Here are the unassigned Tasks</h1>
      {props.tasks.map((el, index) => {
        return <Task key={index} task={el} name={el.name} />;
      })}
    </div>
  );
};

export default UnassignedTasks;
