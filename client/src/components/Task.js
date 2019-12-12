import React from "react";
import axios from "axios";
import "./FlatmateList.css";

const Task = props => {
  const handleClick = () => {
    axios.get(`/api/dashboard/${props.id}`).then(response => {
      console.log("this is the Axios response: ", response);
      props.getData();
    });
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <h2 onClick={handleClick}>{props.name}</h2>
        <img
          id="check"
          style={{ cursor: "pointer" }}
          src={require("../images/remove.png")}
          onClick={() => props.deleteTask(props.id)}
        />
      </div>
    </>
  );
};

export default Task;
