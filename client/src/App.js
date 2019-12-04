import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Flatform from "./components/Flatform";
import Success from "./components/Success";

class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} clearUser={this.setUser} />
        <Route
          exact
          path="/signup"
          // component={Signup}
          render={props => <Signup {...props} setUser={this.setUser} />}
        />
        <Route
          exact
          path="/login"
          render={props => <Login {...props} setUser={this.setUser} />}
        />
         <Route
          exact
          path="/create-flat"
          render={props => <Flatform {...props} setUser={this.setUser} />}
        />
        <Route
          exact
          path="/create-flat"
          render={props => <Success {...props} setUser={this.setUser} />}
        />
      </div>
    );
  }
}

export default App;
