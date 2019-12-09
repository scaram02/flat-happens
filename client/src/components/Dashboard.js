import React, { Component } from "react";
import axios from "axios";
import Weekbar from "./Weekbar";
import UnassignedTasks from "./UnassignedTasks";
import FlatmateList from "./FlatmateList";
import moment from "moment";

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
    console.log("Function getData / Refresh data got called");
    axios
      .get("/api/dashboard")
      .then(response => {
        console.log("Das Beautiful Resposne", response.data);
        var currentWeek = moment().format("W") * 1;
        var currentYear = moment().format("Y") * 1;
        const thisWeekTask = response.data.filter(el => {
          return el.week.week === currentWeek && el.week.year === currentYear;
        });
        const weekRange = thisWeekTask[0].week.weekRange;
        // const week = ;
        const flatInfo = response.data[0].flat;
        this.setState({
          allTasks: response.data,
          flatInfo: flatInfo,

          thisWeekTask: thisWeekTask,
          currentWeek: thisWeekTask[0].week.week,
          currentYear: thisWeekTask[0].week.year,
          weekRange: weekRange,
          flatmates: response.data[0].flat.user
          // this.setState({
          //   user: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <div className="flat-container">
        <Weekbar
          currentInfo={this.state}
          flatInfo={this.state.flatInfo}
          user={this.state.user}
        />
        <FlatmateList
          flatmate={this.state.flatmates}
          tasks={this.state.thisWeekTask}
        />
        <UnassignedTasks tasks={this.state.thisWeekTask} />
      </div>
    );
  }
}

export default Dashboard;
