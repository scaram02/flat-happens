import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar as Nav } from "react-bootstrap";
import moment from "moment";
import axios from 'axios';

var currentWeek = moment().format("W") * 1;

console.log(typeof currentWeek);
console.log(currentWeek);



class Weekbar extends Component {

state = {
  weeks: []
};

getData = () => {
  axios
  .get("/api/dashboard")
  .then(response => {
    this.setState({
      weeks: response.data
    })
  }).catch(err => {
    console.log(err);
  })
}

componentDidMount() {
  this.getData();
}

render() {
  return (
    <Nav className="nav" bg="basic">
      {this.props.user ? (
        <React.Fragment>
          <Link to="/">Last Week</Link>
          <h1>This week</h1>
          <Link to="/">Next Week</Link>
        </React.Fragment>
      ) : (
        <></>
      )}
    </Nav>
  );
};
}

export default Weekbar;
