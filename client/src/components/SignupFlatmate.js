import React, { Component } from "react";
import { referral } from "../services/auth";
import { Alert, Form, Button } from "react-bootstrap";
import './Signup.css'

class SignupFlatmate extends Component {
  state = {
    username: "",
    password: "",
    flatId: this.props.match.params.flatId,
    error: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    referral(this.state.username, this.state.password, this.state.flatId).then(
      data => {
        if (data.message) {
          // handle errors
          this.setState({
            error: data.message
          });
        } else {
          // no error
          // lift the data up to the App state
          console.log(data);
          this.props.setUser(data);
          this.props.history.push("/dashboard");
        }
      }
    );
  };

  componentDidMount = () => {
    console.log("Hallooooo");
    console.log(this.props.match.params.flatId);
  };

  render() {
    return (
      <div className="chalkboard-container">

        <div className="signup-form-box">

      <div>
        <h2 className="sign-up-header">Signup</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
        <div className="field-container">
            <div className="fields">
            <label htmlFor="username">Username: </label>
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
           <div>
          <button className='signup-button chalk-border' type="submit">Sign up</button>
           </div>
           <div>
             {this.state.error && (
          <alert variant="danger">{this.state.error}</alert>
          )}
          </div>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default SignupFlatmate;
