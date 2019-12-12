import React, { Component } from "react";
import { login } from "../services/auth";
import { Alert, Form, Button } from "react-bootstrap";
import './Signup.css'

class Login extends Component {
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

    login(this.state.username, this.state.password).then(data => {
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
        this.props.history.push("/dashboard");
      }
    });
  };

  render() {
    return (
      <div className="chalkboard-container">
       
        <form className="signup-form-container" onSubmit={this.handleSubmit}>
           <h2 className="sign-up-header">Log in</h2>
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
            <label htmlFor="password">Password: </label>
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
          <button className="signup-button chalk-border" type="submit">Log in</button>
        </form>
      </div>
 
    );
  }
}

export default Login;
