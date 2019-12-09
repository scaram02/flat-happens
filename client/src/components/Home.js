import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h2>We offer a great solution for managing your WG life!</h2>
        <button>
          <a href="/signup">Sign up!</a>{" "}
        </button>
        <button>
          <a href="/login">Log in!</a>{" "}
        </button>
      </div>
    );
  }
}
