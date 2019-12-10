import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Invite extends Component {
  state = {
    textToCopy: "",
    message: ""
  };

  invite = () => {
    navigator.clipboard.writeText(this.state.textToCopy);
    this.setState({ message: "Your link has been added to the clipboad" });
    this.timeOut();
  };

  timeOut = () => {
    setTimeout(() => {
      this.setState({ message: "" });
    }, 3000);
  };

  componentDidMount = () => {
    this.setState({
      // textToCopy: `https://wg-your-way.herokuapp.com/invite/${this.props.match.params.id}`
      textToCopy: `http://localhost:3000/signup/${this.props.match.params.id}`
    });
  };

  render() {
    return (
      <div>
        Your flat has been successfully created. You can invite your flatmates
        by sharing this link with them.
        <button onClick={this.invite} style={{ cursor: "pointer" }}>
          Share with your Flatmates
        </button>
        <p style={{ textAlign: "center" }}>{this.state.message}</p>
        <Link to="/dashboard">GO to your DASHBOARD</Link>
      </div>
    );
  }
}
