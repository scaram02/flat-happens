import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

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

  handleCheckboxOneChange = event => {
    console.log("here you have multiple things checked", event.target.checked);
    this.setState({ checkedOne: event.target.checked });
  };

  handleCheckboxTwoChange = event => {
    console.log("here you have multiple things checked", event.target.checked);
    this.setState({ checkedTwo: event.target.checked });
  };

  handleCheckboxThreeChange = event => {
    console.log("here you have multiple things checked", event.target.checked);
    this.setState({ checkedThree: event.target.checked });
  };

  handleCheckboxFourChange = event => {
    console.log("here you have multiple things checked", event.target.checked);
    this.setState({ checkedFour: event.target.checked });
  };

  handleChange = event => {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("FLATFORM ISSUBMITED. B A N A N A S");
    axios
      .post("/api/invite", {
        name: this.state.name,
        weeklyTasks: this.state.weeklyTasks,
        user: this.props.user
      })
      .then(flat => {
        // this.props.refreshData();
        console.log("I WANT DATAAAA  ", flat);
        this.props.history.push(`/invite/${flat.data._id}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log("flatform stuff is bananas", this.props);
    return (
      <div>
        <h2>Tell us about your flat </h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Name your apartment:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <h2>Choose your weekly tasks:</h2>
          <label>
            <Checkbox
              checked={this.state.checkedOne}
              onChange={this.handleCheckboxOneChange}
            />
            <span>Clean the kitchen</span>
          </label>

          <label>
            <Checkbox
              checked={this.state.checkedTwo}
              onChange={this.handleCheckboxTwoChange}
            />
            <span>Clean the bathroom</span>
          </label>

          <label>
            <Checkbox
              checked={this.state.checkedThree}
              onChange={this.handleCheckboxThreeChange}
            />
            <span>Grocery shopping</span>
          </label>

          <label>
            <Checkbox
              checked={this.state.checkedFour}
              onChange={this.handleCheckboxFourChange}
            />
            <span>Buy toiletries</span>
          </label>

          <Button type="submit">Create your flat!</Button>
        </Form>
      </div>
    );
  }
}
