import React, { Component } from "react";
import axios from "axios"

class UnassignedTasks extends Component {
  state = {
    // weeks: [],
    name: "",
    week: "",
    flat: "",
    user: ""
  };


  getData = () => {
    console.log('something')
    // ANDRE: Why is the axios call not working? Is this how we are supposed to get tasks from the backend?
    // ANDRE: Do we need to get the current week information here as well? How do we display tasks only for the current week? 
    axios
      .get("/api/create-flat")
      .then(tasks => {
        console.log("SHOW US tasks.DATA", tasks)
        this.setState({
          name: tasks.data.name,
          week: tasks.data.week,
          flat: tasks.data.flat,
          user: tasks.data.rest.flat.name
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getData();
  }



  render() {
    return (
      <div>
        <h1>Here are the unassigned tasks</h1>
      </div>
    );
  }
}

export default UnassignedTasks;
