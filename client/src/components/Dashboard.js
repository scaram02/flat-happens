import React, { Component } from "react";
import axios from "axios";
import Weekbar from "./Weekbar";
import UnassignedTasks from "./UnassignedTasks";
import FlatmateList from "./FlatmateList";

class Dashboard extends Component {
  state = {
    user: this.props.user,
    allTasks: [],
    flatInfo: {},
    currentWeek: null,
    currentYear: null,
    weekRange: null,
    flatmates: [],
    thisWeekTask: []
  };

  getData = () => {
    console.log("GET DATA IN DASHBOARD");
    console.log("Function getData / Refresh data got called");
    axios
      .get("/api/dashboard")
      .then(response => {
        console.log("Das Beautiful Resposne", response.data.flat.user);

        this.setState(
          {
            allTasks: response.data.tasks,
            flatInfo: response.data.flat,
            flatmates: response.data.flat.user
          },
          () => console.log("FLATMATES FRONM DASH:", this.state.flatmates)
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const unnassignedTasks =
      this.state.allTasks && this.state.allTasks.filter(x => x.user === null);
    const assignedTasks =
      this.state.allTasks && this.state.allTasks.filter(x => x.user !== null);
    return (
      <div className="flat-container">
        {/* <Navbar user={this.state.user} clearUser={this.setUser} /> */}
        <Weekbar
          currentInfo={this.state}
          flatInfo={this.state.flatInfo}
          user={this.state.user}
        />
        <FlatmateList flatmate={this.state.flatmates} tasks={assignedTasks} />
        <UnassignedTasks tasks={unnassignedTasks} getData={this.getData} />
      </div>
    );
  }
}

export default Dashboard;
