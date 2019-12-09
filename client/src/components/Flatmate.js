import React from "react";
import Task from "./Task";

const Flatmate = props => {
  console.log("ELEMNTARY DEAR AMELIA", props);
  return (
    <>
      <div>
        <div key={props.user._id}> {props.user.username}</div>
      </div>
      {/* <Task /> */}
    </>
  );
};

export default Flatmate;
