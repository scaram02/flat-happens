import React, { Component } from "react";
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
              <div className="arrow">
                <img
                  className="arrow-img"
                  src={require("../images/left.png")}
                  alt=""
                  onClick={this.props.previousWeek}
                />
              </div>
              <div className="info">
                <h1 id="flatname"> {this.props.flatInfo.name}</h1>
                <h3 onClick={this.props.getData}>
                  {this.props.currentInfo.weekRange}
                </h3>
              </div>
              <div className="arrow">
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
