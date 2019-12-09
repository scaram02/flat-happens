import React, { Component } from "react";
// import axios from "axios";
import Weekbar from "./Weekbar";
import UnassignedTasks from "./UnassignedTasks";

class Dashboard extends Component {
  state = {
    user: []
  };

  // getData = () => {
  //   console.log("Function getData / Refresh data got called");
  //   axios
  //     .get("/api/dashboard")
  //     .then(response => {
  //       console.log("Das Beautiful Resposne", response);
  //       this.setState({
  //         user: response.data
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // componentDidMount() {
  //   this.getData();
  // }

  render() {
    return (
      <div className="flat-container">
        <Weekbar user={this.state.user} />
        {/* <Flatmate /> */}
        <UnassignedTasks />
      </div>
    );
  }
}

export default Dashboard;
