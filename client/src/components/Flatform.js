import React, { Component } from "react";
// import { Form } from "react-bootstrap";
import axios from "axios";
import "./flatform.css";

// const Checkbox = props => <input type="checkbox" {...props} />;

export default class Flatform extends Component {
  state = {
    name: "",
    weeklyTasks: [],
    user: [],
    checkedOne: false,
    checkedTwo: false,
    checkedThree: false,
    checkedFour: false
  };

  handleCheckboxOneChange = task => {
    console.log("here you have multiple things checked", task);

    this.setState({
      checkedOne: !this.state.checkedOne,
      weeklyTasks: this.state.weeklyTasks.concat(task)
    });
  };

  handleCheckboxTwoChange = task => {
    console.log("here you have multiple things checked", task);
    this.setState({
      checkedTwo: !this.state.checkedTwo,
      weeklyTasks: this.state.weeklyTasks.concat(task)
    });
  };

  handleCheckboxThreeChange = task => {
    console.log("here you have multiple things checked", task);
    this.setState({
      checkedThree: !this.state.checkedThree,
      weeklyTasks: this.state.weeklyTasks.concat(task)
    });
  };

  handleCheckboxFourChange = task => {
    console.log("here you have multiple things checked", task);
    this.setState({
      checkedFour: !this.state.checkedFour,
      weeklyTasks: this.state.weeklyTasks.concat(task)
    });
  };

  handleChange = event => {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("FLATFORM IS SUBMITED. B A N A N A S");
    axios
      .post("/api/create-flat", {
        name: this.state.name,
        weeklyTasks: this.state.weeklyTasks,
        user: this.props.user
      })
      .then(updatedData => {
        // this.props.refreshData();
        console.log("SHOW ME UPDATED DATAAAA", updatedData);

        this.props.history.push(`/invite/${updatedData.data._id}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    // console.log("tHE FLATFORM IS WORKING", this.props);
    return (
      <div className="flatform-container">
        <div className="flatform-title">
          <h1>Set up your shared flat!</h1>
        </div>

        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="label-container">
              <label>
                <h2>Give your flat a cool name:</h2>
              </label>
            </div>

            <div className="input-container">
              <input
                type="text"
                name="name"
                placeholder="Add flat name here"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-title-2">
              <h2>Choose your weekly tasks:</h2>
            </div>

            <div className="checkbox-container">
              <div className="checkboxes">
                <input
                  type="checkbox"
                  checked={this.state.checkedOne}
                  onChange={() =>
                    this.handleCheckboxOneChange("Clean the kitchen")
                  }
                />
                <label>Clean the kitchen</label>
              </div>

              <div className="checkboxes">
                <input
                  type="checkbox"
                  checked={this.state.checkedTwo}
                  onChange={() =>
                    this.handleCheckboxTwoChange("Clean the bathroom")
                  }
                />
                <label>Clean the bathroom</label>
              </div>

              <div className="checkboxes">
                <input
                  type="checkbox"
                  checked={this.state.checkedThree}
                  onChange={() =>
                    this.handleCheckboxThreeChange("Buy toiletries")
                  }
                />
                <label>Buy toiletries</label>
              </div>

              <div className="checkboxes">
                <input
                  type="checkbox"
                  checked={this.state.checkedFour}
                  onChange={() =>
                    this.handleCheckboxFourChange("Take out the garbage")
                  }
                />
                <label>Take out the garbage</label>
              </div>
            </div>

            <button className="button" type="submit">
              Create your flat!
            </button>
          </form>
        </div>
      </div>
    );
  }
}
