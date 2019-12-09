import React from "react";
import Task from "./Task";

const UnassignedTasks = props => {
  console.log("TASKS", props.tasks);

  return (
    <div>
      <h1>Here are the unnasigned Tasks</h1>
      {props.tasks.map(el => {
        return <Task name={el.name} />;
      })}
    </div>
  );
};

export default UnassignedTasks;
