import React, { Component } from "react";
import axios from "axios";

export class TaskForm extends Component {
  state = {
    name: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => console.log(this.state.name)
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    const name = this.state.name;

    axios
      .post("/api/dashboard", {
        name
      })
      .then(response => {
        console.log("NEW TASK:", response.data);
        this.props.getData();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Add a task</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type="submit">Submit the task</button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
