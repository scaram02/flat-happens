import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "./flatform.css";

const Checkbox = props => <input type="checkbox" {...props} />;

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
      <div className="form">
        <h1>Tell us about your flat </h1>
        <div className="form-container">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <div className="flat-name">
                <Form.Label>
                  <h2>Give your apartment a cool name:</h2>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
            </Form.Group>
            <h2>Choose your weekly tasks:</h2>
            <div className="checkbox-container">
              <div>
                <label>
                  <Checkbox
                    checked={this.state.checkedOne}
                    onChange={() =>
                      this.handleCheckboxOneChange("Clean the kitchen")
                    }
                  />
                  <span>Clean the kitchen</span>
                </label>
              </div>
              <div>
                <label>
                  <Checkbox
                    checked={this.state.checkedTwo}
                    onChange={() =>
                      this.handleCheckboxTwoChange("Clean the bathroom")
                    }
                  />
                  <span>Clean the bathroom</span>
                </label>
              </div>
              <div>
                <label>
                  <Checkbox
                    checked={this.state.checkedThree}
                    onChange={() =>
                      this.handleCheckboxThreeChange("Buy toiletries")
                    }
                  />
                  <span>Buy toiletries</span>
                </label>
              </div>
              <div>
                <label>
                  <Checkbox
                    checked={this.state.checkedFour}
                    onChange={() =>
                      this.handleCheckboxFourChange("Take out the garbage")
                    }
                  />
                  <span>Take out the garbage</span>
                </label>
              </div>
            </div>
            <Button className="button" type="submit">
              Create your flat!
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
