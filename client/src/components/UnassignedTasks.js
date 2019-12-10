import React from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

const UnassignedTasks = props => {
  console.log("TASKS", props.tasks);

  return (
    <div style={{ padding: "20px", backgroundColor: "red" }}>
      <h1>Here are the unassigned Tasks</h1>
      {props.tasks.map(el => {
        //return <h2> {el.name} </h2>;
        return (
          <Task
            key={el._id}
            task={el}
            name={el.name}
            id={el._id}
            getData={props.getData}
          />
        );
      })}
      <TaskForm getData={props.getData} />
    </div>
  );
};

export default UnassignedTasks;
