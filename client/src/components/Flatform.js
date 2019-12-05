import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default class Flatform extends Component {
  state = {
    name: "",
    weeklyTasks: [],
    user: []
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
        console.log(flat);
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
          <Form.Group>
            <Form.Label>Bathroom cleaning</Form.Label>
            <Form.Control
              type="checkbox"
              name="weeklyTasks"
              value={this.state.weeklyTasks}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Kitchen cleaning</Form.Label>
            <Form.Control
              type="checkbox"
              name="weeklyTasks"
              value={this.state.weeklyTasks}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Taking down the trash</Form.Label>
            <Form.Control
              type="checkbox"
              name="weeklyTasks"
              value={this.state.weeklyTasks}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Toiletries shopping</Form.Label>
            <Form.Control
              type="checkbox"
              name="weeklyTasks"
              value={this.state.weeklyTasks}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button type="submit">Create your flat!</Button>
        </Form>
      </div>
    );
  }
}
