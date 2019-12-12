import React, { Component } from "react";
import { signup } from "../services/auth";
import { Alert } from "react-bootstrap";
import "./Signup.css";

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

        <form className="signup-form-container" onSubmit={this.handleSubmit}>

          <h2 className="sign-up-header bottom-chalk-border">Sign up</h2>
        
          <div className="field-container">
            <div className="fields">
            <label htmlFor="username" className="signup-label">Username: </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            
            <div className="fields">
            <label htmlFor="password" className="signup-label">Password: </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
          </div>
          {this.state.error && (
            <Alert variant="danger">{this.state.error}</Alert>
          )}

          <button className="signup-button chalk-border" type="submit">
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
