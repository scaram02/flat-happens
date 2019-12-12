import React from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import "./UnassignedTasks.css";

const UnassignedTasks = props => {
  // console.log("TASKS", props.tasks);
  console.log(props);
  return (
    <div>
      <h1 className="bottom-chalk-border">Unassigned Tasks</h1>
      
        {props.tasks.map(el => {
          //return <h2> {el.name} </h2>;
          return (
            <div>
              <Task
                key={el._id}
                task={el}
                name={el.name}
                id={el._id}
                getData={props.getData}
                deleteTask={props.deleteTask}
              />
            </div>
          );
        })}
        <TaskForm getData={props.getData} />
      </div>

  );
};

export default UnassignedTasks;
