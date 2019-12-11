import React from "react";
// import Flatmate from "./Flatmate";

const FlatmateList = props => {
  // console.log("FLATMATES", props.flatmate);
  // console.log("TASKS", props.tasks);

  //return <Flatmate key={x._id} user={x} />;

  const flatmate = props.flatmate.map(x => {
    const tasks = props.tasks
      // UNASSIGN TASKS RIGHT BACK
      .filter(t => {
        // console.log("TASK", t, "USERNAME", x);
        return t.user.username === x.username;
      })
      .map(t => {
        return <li>{t.name}</li>;
      });
    return (
      <div>
        <h3> {x.username} </h3>
        <ul>{tasks}</ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Here are the flatmates</h1>
      {flatmate}
    </div>
  );
};

export default FlatmateList;
