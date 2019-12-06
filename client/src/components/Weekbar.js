import React, { Component } from "react";
import { Navbar as Nav } from "react-bootstrap";
import axios from "axios";


class Weekbar extends Component {
  state = {
    // weeks: [],
    currentWeek: "",
    currentYear: "",
    weekRange: "",
    flatName: ""
  };

  previousWeek = () => {
    this.setState({ currentWeek: this.state.currentWeek - 1 }, () => {
      axios
        .get(
          `/api/dashboard/${this.state.currentWeek}/${this.state.currentYear}`
        )
        .then(response => {
          console.log(response.data);
          this.setState({
            currentWeek: response.data.currentWeek.week,
            currentYear: response.data.currentWeek.year,
            weekRange: response.data.currentWeek.weekRange,
            flatName: response.data.rest.flat.name
          });
        });
    });
  };

  nextWeek = () => {
    const yearCheck =
      this.state.currentYear === 2019 ||
      this.state.currentYear === 2021 ||
      this.state.currentYear === 2022;
    console.log("THIS TRUE, THAT IM FEELING?", yearCheck);
    console.log(this.state.currentWeek, !yearCheck);
    if (this.state.currentWeek === 52 && yearCheck) {
      this.setState(
        { currentWeek: 1, currentYear: this.state.currentYear + 1 },
        () => {
          axios
            .get(
              `/api/dashboard/${this.state.currentWeek}/${this.state.currentYear}`
            )
            .then(response => {
              console.log(response.data);
              this.setState({
                currentWeek: response.data.currentWeek.week,
                currentYear: response.data.currentWeek.year,
                weekRange: response.data.currentWeek.weekRange,
                flatName: response.data.rest.flat.name
              });
            });
        }
      );
    } else if (this.state.currentWeek === 53 && !yearCheck) {
      this.setState(
        { currentWeek: 1, currentYear: this.state.currentYear + 1 },
        () => {
          axios
            .get(
              `/api/dashboard/${this.state.currentWeek}/${this.state.currentYear}`
            )
            .then(response => {
              console.log(response.data);
              this.setState({
                currentWeek: response.data.currentWeek.week,
                currentYear: response.data.currentWeek.year,
                weekRange: response.data.currentWeek.weekRange,
                flatName: response.data.rest.flat.name
              });
            });
        }
      );
    } else {
      this.setState({ currentWeek: this.state.currentWeek + 1 }, () => {
        axios
          .get(
            `/api/dashboard/${this.state.currentWeek}/${this.state.currentYear}`
          )
          .then(response => {
            console.log(response.data);
            this.setState({
              currentWeek: response.data.currentWeek.week,
              currentYear: response.data.currentWeek.year,
              weekRange: response.data.currentWeek.weekRange,
              flatName: response.data.rest.flat.name
            });
          });
      });
    }
  };

  getData = () => {
    axios
      .get("/api/dashboard")
      .then(response => {
        this.setState({
          currentWeek: response.data.currentWeek.week,
          currentYear: response.data.currentWeek.year,
          weekRange: response.data.currentWeek.weekRange,
          flatName: response.data.rest.flat.name
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
      <Nav className="nav" bg="basic">
        {this.props.user ? (
          <React.Fragment>
            {/* <Link to="/">Last Week</Link> */}
            <h2 onClick={this.previousWeek}>Last week</h2>
            <h1>This week</h1>
            <h2 onClick={this.nextWeek}>Next Week</h2>
            {/* <Link to="/">Next Week</Link> */}
          </React.Fragment>
        ) : (
          <></>
        )}
        {this.state.currentWeek}
        <h3>{this.state.currentYear}</h3>
        <br />
        <div>{this.state.weekRange}</div>
        <h1>Ma flat</h1>
        <div>{this.state.flatName}</div>
      </Nav>
    );
  }
}

export default Weekbar;
