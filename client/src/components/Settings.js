import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Settings extends Component {


  
  render() {
    console.log(this.props);
    return (
      <div>
        You can invite your flatmates by sharing this link with them.
        <p> signup/{this.props.match.params.id}</p>
        <Link to="/dashboard">BACK to your DASHBOARD</Link>
      </div>
    );
  }
}
