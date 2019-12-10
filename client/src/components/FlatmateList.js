import React from "react";
import Flatmate from "./Flatmate";

const FlatmateList = props => {
  return (
    <div>
      <h1>Here are the flatmates</h1>
      {props.flatmate.map((user, index) => {
        return <Flatmate key={index} user={user} />;
      })}
    </div>
  );
};

export default FlatmateList;
