import React from "react";
import axios from "axios";

const Task = props => {
  console.log("COMING FROM ANOTHER COMPONENT PROPS", props);
  let handleClick = () => {
    axios.put(`/api/dashboard/${props.task._id}`).then(response => {
      console.log("this is the Axios response: ", response);
    });
  };

  return <button onClick={handleClick}>{props.name}</button>;
};

export default Task;
