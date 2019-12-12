import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Settings.css"

export default class Settings extends Component {
  state = {
    // weeks: [],
    flatId: "",
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
    }, 1000);
  };

  getData = () => {
    axios
      .get("/api/settings")
      .then(flat => {
        console.log("THIS", flat.data[0]._id);
        this.setState({
          flatId: flat.data[0]._id,
          textToCopy: `http://localhost:3000/signup/${flat.data[0]._id}`
          // textToCopy: `https://wg-your-way.herokuapp.com/invite/${flat.data[0]._id}`
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    console.log("MOUNTED");
    this.getData();
  }

  render() {
    console.log(this.props);
    return (
      <div className="invite-container">
        
        <div className="invite-heading">
          <h1>You can invite your flatmates by sharing this link with them.</h1>
        </div>

        <button
          onClick={this.invite}
          style={{ cursor: "pointer" }}
          className="invite-button"
        >
          Share with your Flatmates
        </button>

        <p className="invite-message">{this.state.message}</p>
        <Link to="/dashboard">
          <div className="to-dashboard">
            <h1>BACK to your DASHBOARD</h1>
            <img
              className="to-dashboard-arrow" alt=""
              src={require("../images/right.png")}
            />{" "}
          </div>
        </Link>
      </div>
    );
  }
}
