import React, { Component } from "react";
import { signup } from "../services/auth";
import { Alert, Form, Button } from "react-bootstrap";
import './Signup.css'

class Signup extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    signup(this.state.username, this.state.password).then(data => {
      if (data.message) {
        // handle errors
        this.setState({
          error: data.message
        });
      } else {
        // no error
        // lift the data up to the App state
        this.props.setUser(data);
        // redirect to "/projects"
        this.props.history.push("/create-flat");
      }
    });
  };

  render() {
    return (
      <div className="chalkboard-container">
        <div className='box'>
        <div>
        <h2>Sign up</h2>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <div className="fields">
            {/* <label htmlFor="username">Username: </label> */}
            
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            </div>
          <div>
            {/* <label htmlFor="password">Password: </label> */}
            </div>
            <div className="fields">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
        </div>
          {this.state.error && (
            <Alert variant="danger">{this.state.error}</Alert>
          )}
          <Button className='signup-button' type="submit">Sign up</Button>
        </Form>
    </div>
      </div>
    );
  }
}

export default Signup;
