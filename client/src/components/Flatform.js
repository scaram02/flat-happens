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
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/api/invite", {
        name: this.state.name,
        weeklyTasks: this.state.weeklyTasks,
        user: this.props.user
      })
      .then(() => {
        this.props.refreshData();
        this.setState({
          name: "",
          weeklyTasks: [],
          user: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
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
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Kitchen cleaning</Form.Label>
            <Form.Control
              type="checkbox"
              name="weeklyTasks"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Taking down the trash</Form.Label>
            <Form.Control
              type="checkbox"
              name="weeklyTasks"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Toiletries shopping</Form.Label>
            <Form.Control
              type="checkbox"
              name="weeklyTasks"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button type="submit">Create your flat!</Button>
        </Form>
      </div>
    );
  }
}
