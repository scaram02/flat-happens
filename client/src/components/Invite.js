import React, { Component } from "react";
import axios from 'axios';



export default class Invite extends Component {

  getData = () => {
    console.log("Function getData / Refresh data got called Invite.js");
    axios
      .get("/api/invite")
      .then(response => {
        console.log(response)
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
    this.getData();
  }


  render() {
    return (
      <div>
        Your flat has been successfully created. You can invite your flatmates
        by sharing this link with them.
      </div>
    );
  }
}
