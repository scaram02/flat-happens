import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Invite extends Component {
  getData = () => {
    const flatId = this.props.match.params.id;

    axios
      .get(`/api/invite/${flatId}`)
      .then(response => {
        console.log(response);
        // this.setState({
        //   name: response.data,
        //   weeklyTasks: response.data,
        //   user: response.data
        // });
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
    return (
      <div>
        Your flat has been successfully created. You can invite your flatmates
        by sharing this link with them.
        <p> signup/{this.props.match.params.id}</p>

        <Link to="/dashboard">GO to your DASHBOARD</Link>
      </div>
    );
  }
}
