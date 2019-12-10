import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

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
        console.log("THIS", flat.data[0]._id)
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
      <div>
        You can invite your flatmates by sharing this link with them.
        <button onClick={this.invite} style={{ cursor: "pointer" }}>
          Share with your Flatmates
        </button>
               <p style={{ textAlign: "center" }}>{this.state.message}</p>
        <Link to="/dashboard">BACK to your DASHBOARD</Link>
      </div>
    );
  }
}
