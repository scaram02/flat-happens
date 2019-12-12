import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Invite.css";

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
      textToCopy: `${process.env.REACT_APP_BASE_URL}/signup/${this.props.match.params.id}`
    });
  };

  render() {
    return (
      <div className="invite-container">
        <div className="invite-heading">
          <h1>Your flat has been successfully created</h1>
        </div>

        <button
          onClick={this.invite}
          style={{ cursor: "pointer" }}
          className="invite-button"
        >
          Invite your flatmates
        </button>

        <p className="invite-message">{this.state.message}</p>
        <Link to="/dashboard">
          <div className="to-dashboard">
            <h1>To your dashboard</h1>
            <img
              className="to-dashboard-arrow"
              src={require("../images/right.png")}
              alt=""
            />{" "}
          </div>
        </Link>
      </div>
    );
  }
}
