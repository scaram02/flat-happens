import React from "react";
import { Link } from "react-router-dom";
import { Navbar as Nav } from "react-bootstrap";
import moment from "moment";

const Weekbar = props => {
  var currentWeek = moment().format("W") * 1;

  console.log(typeof currentWeek);
  console.log(currentWeek);

  console.log("Hey", props);

  return (
    <Nav className="nav" bg="basic">
      {props.user ? (
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

export default Weekbar;
