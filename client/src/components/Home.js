import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container ">
        <div className="home-nav">
          <div className="header-container">
            <div className="title">
              <h1>FLAT happens!</h1>
            </div >
            <h2 className='subtitle'>We offer a great solution to managing your WG life!</h2>
          </div>
          <div className="home-button-container">
            <div className="home-button chalk-border">
              <a className="button-links" href="/signup">
                Sign up!
              </a>{" "}
            </div>
            <div className="home-button chalk-border">
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
