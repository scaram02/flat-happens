import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default class FlatForm extends Component {
  state = {
    name: "",
    weeklyTasks: [],
    user: []
  };

  handleChange = event => {
    const { name, weeklyTasks, user } = event.target;
    this.setState({ [name]: value }, {[weeklyTasks]: value}, {[user]: value});
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/api/flat", {
        name: this.state.name,
        weeklyTasks: this.state.weeklyTasks,
        user: this.props.user
      })
      .then(() => {
        this.props.refreshData();
        this.setState({
          name: '',
          weeklyTasks:[],
          user: ''
        })
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
          
          <Button type="submit">Create your flat!</Button>
        </Form>
      </div>
    );
  }
}