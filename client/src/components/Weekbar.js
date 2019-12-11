import React, { Component } from "react";
import { Navbar as Nav } from "react-bootstrap";

class Weekbar extends Component {
  state = {
    // weeks: [],
    currentWeek: "",
    currentYear: "",
    weekRange: ""
  };

  render() {
    console.log(this.props.currentInfo);
    return (
      <Nav className="nav" bg="basic">
        {this.props.user ? (
          <React.Fragment>
            {/* <Link to="/">Last Week</Link> */}
            <h2 onClick={this.props.previousWeek}>Last week</h2>
            <h1>This week {this.props.currentInfo.currentWeek}</h1>
            <h2 onClick={this.props.nextWeek}>Next Week</h2>
            {/* <Link to="/">Next Week</Link> */}
          </React.Fragment>
        ) : (
          <></>
        )}
        {this.state.currentWeek}
        <h3>{this.props.currentInfo.currentYear}</h3>
        <br />
        <div>{this.props.currentInfo.weekRange}</div>
        <h1>Ma flat</h1>
        <div>{this.props.flatInfo.name}</div>
      </Nav>
    );
  }
}

export default Weekbar;
