import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Weekbar from "./Weekbar";
import UnassignedTasks from "./UnassignedTasks";
import FlatmateList from "./FlatmateList";
import { logout } from "../services/auth";
import "./Dashboard.css";

class Dashboard extends Component {
  state = {
    user: this.props.user,
    allTasks: [],
    flatInfo: {},
    currentWeek: null,
    currentYear: null,
    weekRange: null,
    flatmates: [],
    thisWeekTask: [],
    startWeek: null,
    startYear: null
  };

  handleLogout = () => {
    //
    logout();
    this.props.clearUser(null);
  };

  getData = () => {
    // console.log("GET DATA IN DASHBOARD");
    // console.log("Function getData / Refresh data got called");
    axios
      .get("/api/dashboard")
      .then(response => {
        console.log("Das Beautiful Resposne", response.data);
        const currentWeek = response.data.week[0].week;
        const currentYear = response.data.week[0].year;
        const weekRange = response.data.week[0].weekRange;
        this.setState(
          {
            allTasks: response.data.tasks,
            flatInfo: response.data.flat,
            flatmates: response.data.flat.user,
            currentWeek: currentWeek,
            startWeek: currentWeek,
            startYear: currentYear,
            currentYear: currentYear,
            weekRange: weekRange
          },
          () => console.log("Das beautiful state", this.state)
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getData();
  }

  previousWeek = () => {
    const yearCheck =
      this.state.currentYear === 2019 ||
      this.state.currentYear === 2020 ||
      this.state.currentYear === 2022;
    if (yearCheck && this.state.currentWeek === 1) {
      axios
        .get(`/api/dashboard/${52}/${this.state.currentYear - 1}`)
        .then(response => {
          this.updateWeek(response);
        });
    } else if (!yearCheck && this.state.currentWeek === 1) {
      axios
        .get(`/api/dashboard/${53}/${this.state.currentYear - 1}`)
        .then(response => {
          this.updateWeek(response);
        });
    } else {
      axios
        .get(
          `/api/dashboard/${this.state.currentWeek - 1}/${
            this.state.currentYear
          }`
        )
        .then(response => {
          console.log(response);
          this.updateWeek(response);
        });
    }
  };

  updateWeek = response => {
    const newWeek = response.data.tasks[0].week.week;
    const newYear = response.data.tasks[0].week.year;
    const newWeekRange = response.data.tasks[0].week.weekRange;

    this.setState(
      {
        allTasks: response.data.tasks,
        currentWeek: newWeek,
        currentYear: newYear,
        weekRange: newWeekRange
      },
      () => {
        if (
          this.state.currentWeek === this.state.startWeek &&
          this.state.currentYear === this.state.startYear
        ) {
          this.getData();
        }
      }
    );
  };

  nextWeek = () => {
    const yearCheck =
      this.state.currentYear === 2019 ||
      this.state.currentYear === 2021 ||
      this.state.currentYear === 2022;
    if (this.state.currentWeek === 52 && yearCheck) {
      axios
        .get(`/api/dashboard/${1}/${this.state.currentYear + 1}`)
        .then(response => {
          console.log(response);
          this.updateWeek(response);
        });
    } else if (this.state.currentWeek === 53 && !yearCheck) {
      axios
        .get(`/api/dashboard/${1}/${this.state.currentYear + 1}`)
        .then(response => {
          console.log(response);
          this.updateWeek(response);
        });
    } else {
      axios
        .get(
          `/api/dashboard/${this.state.currentWeek + 1}/${
            this.state.currentYear
          }`
        )
        .then(response => {
          console.log(response);
          this.updateWeek(response);
        });
    }
  };

  deleteTask = id => {
    console.log(`${id} is about to be deleted`);
    axios.delete(`/api/dashboard/delete/${id}`).then(response => {
      console.log(response);
      this.getData();
    });
  };

  render() {
    const unnassignedTasks =
      this.state.allTasks && this.state.allTasks.filter(x => x.user === null);
    const assignedTasks =
      this.state.allTasks && this.state.allTasks.filter(x => x.user !== null);
    console.log(unnassignedTasks, assignedTasks);
    return (
      <div className="dashboard-container">
        {/* <Navbar user={this.state.user} clearUser={this.setUser} /> */}
        <div className="top-part">
          <div>
            <Weekbar
              currentInfo={this.state}
              flatInfo={this.state.flatInfo}
              user={this.state.user}
              previousWeek={this.previousWeek}
              nextWeek={this.nextWeek}
              getData={this.getData}
            />
          </div>
          <div className="tasks-container">
            <div className="unassigned-tasks">
              <UnassignedTasks
                tasks={unnassignedTasks}
                getData={this.getData}
                deleteTask={this.deleteTask}
              />
            </div>
            <div className="assigned-tasks">
              <FlatmateList
                flatmate={this.state.flatmates}
                tasks={assignedTasks}
                getData={this.getData}
              />
            </div>
          </div>
        </div>
        <div className="bottom-part">
          <div className="settings">
            <Link to="/settings">
              <img
                className="settings-img"
                alt=""
                src={require("../images/settings.png")}
              />
            </Link>
            <Link to="/" onClick={this.handleLogout}>
              <img
                className="settings-img"
                alt=""
                src={require("../images/logout.png")}
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
