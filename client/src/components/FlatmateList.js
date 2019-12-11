import React from "react";
import axios from "axios";
// import Flatmate from "./Flatmate";

const FlatmateList = props => {
  // console.log("FLATMATES", props.flatmate);
  // console.log("TASKS", props.tasks);

  //return <Flatmate key={x._id} user={x} />;

  const removeTask = id => {
    // console.log(id);
    axios.put(`/api/dashboard/remove/${id}`).then(response => {
      console.log("this is the Axios response: ", response);
      props.getData();
    });
  };

  const checkTask = id => {
    axios.put(`/api/dashboard/check/${id}`).then(response => {
      console.log("this is the Axios response: ", response);
      props.getData();
    });
  };

  const flatmate = props.flatmate.map(x => {
    const tasks = props.tasks
      // UNASSIGN TASKS RIGHT BACK
      .filter(t => {
        // console.log("TASK", t, "USERNAME", x);
        return t.user.username === x.username;
      })
      .map(t => {
        // console.log(t);
        return (
          <>
            {t.finished ? (
              <li
                style={{ textDecoration: "line-through" }}
                onClick={() => removeTask(t._id)}
              >
                {t.name}
              </li>
            ) : (
              <li onClick={() => removeTask(t._id)}>{t.name}</li>
            )}

            <button onClick={() => checkTask(t._id)}>CHeck</button>
          </>
        );
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
      <h1>Flatmates</h1>
      {flatmate}
    </div>
  );
};

export default FlatmateList;
