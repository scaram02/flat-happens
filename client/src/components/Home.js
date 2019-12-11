import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container home-nav">
        <div className="">
          <div className="header-container">
            <div className="teach-me-css-pls">
              <h1>FLAT happens!</h1>
            </div>
            {/* Flat'll happen */}
            <h2>We offer a great solution to managing your WG life!</h2>
          </div>
          <div className="home-button">
            <div className="home-button-container">
              <a className="button-links" href="/signup">
                Sign up!
              </a>{" "}
            </div>
            <div className="home-button-container">
              <a className="button-links" href="/login">
                Log in!
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
