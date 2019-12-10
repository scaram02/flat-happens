import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Invite extends Component {
  state = {
    textToCopy: "",
    message: ""
  };

  anotherPage = () => {
    navigator.clipboard.writeText(this.state.textToCopy);
    // this.setState({ message: "Your link has been added to the clipboad" });
    // this.timeOut();
  };

  // timeOut = () => {
  //   setTimeout(() => {
  //     this.setState({ message: "" });
  //   }, 1000);
  // };
  
  componentDidMount = () => {
    this.setState({
      textToCopy: `https://wg-your-way.herokuapp.com/invite/${this.props.match.params.id}`
    });
  };

  render() {
    return (
      <div>
        Your flat has been successfully created. You can invite your flatmates
        by sharing this link with them.
        <i
            onClick={this.anotherPage}
            style={{ cursor: "pointer" }}
          ></i>
          {/* <p style={{ textAlign: "center" }}>{this.state.message}</p> */}
        <Link to={`/invite/${this.props.match.params.id}`}>
            {" "}
            Share with your Flatmates
          </Link>
        <Link to="/dashboard">GO to your DASHBOARD</Link>
      </div>
    );
  }
}
