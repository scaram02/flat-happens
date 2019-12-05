import React, { Component } from "react";
import axios from "axios";
import Weekbar from "./Weekbar";

class Dashboard extends Component {
  state = {
    name: "",
    weeklyTasks: [],
    user: []
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    createFlat(this.state.name, this.state.weeklyTasks, this.state.user).then(
      data => {
        if (data.message) {
          // handle errors
          this.setState({
            error: data.message
          });
        } else {
          // no error
          // lift the data up to the App state
          this.props.setUser(data);
          // redirect to "/projects"
          this.props.history.push("/invite");
        }
      }
    );
  };

  getData = () => {
    console.log("Function getData / Refresh data got called");
    axios
      .get("/api/create-flat")
      .then(response => {
        this.setState({
          name: response.data,
          weeklyTasks: response.data,
          user: response.data
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
    return (
      <div className="flat-container">
     <Weekbar />
     <Flatmate />
     <UnassignedTasks />
      </div>
    );
  }
}

export default Dashboard;
