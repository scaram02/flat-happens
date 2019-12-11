import React, { Component } from "react";
import { Navbar as Nav } from "react-bootstrap";
import "./Weekbar.css";

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
      <div>
        {this.props.user ? (
          <React.Fragment>
            <div className="weekbar-container">
              <div>
                <img
                  className="arrow-img"
                  src={require("../images/left.png")}
                  alt=""
                  onClick={this.props.previousWeek}
                />
              </div>
              <div>
                <h1 onClick={this.props.getData}>
                  {this.props.currentInfo.weekRange}
                </h1>
              </div>
              <div>
                <img
                  className="arrow-img"
                  src={require("../images/right.png")}
                  alt=""
                  onClick={this.props.nextWeek}
                />
              </div>
            </div>
          </React.Fragment>
        ) : (
          <></>
        )}
        {/* {this.state.currentWeek}
            {this.props.currentInfo.currentYear}
            {this.props.currentInfo.currentWeek} 
            {this.props.flatInfo.name}</div> */}
      </div>
    );
  }
}

export default Weekbar;
