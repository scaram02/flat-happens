import React, { Component } from "react";
import axios from "axios";
import "./TaskForm.css";

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
    this.setState({
      name: ""
    })

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
      <div className="taskform-container">
        <form onSubmit={this.handleSubmit}>
          <div className="label-container">
            <label htmlFor="name"></label>
          </div>
          <div className="input-container">
            <input
              type="text"
              name="name"
              placeholder="Add a task here"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit"><img className="icon" src={require("../images/plus.png")} alt=""/></button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
