import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import SignupFlatmate from "./components/SignupFlatmate";
import Login from "./components/Login";
import Flatform from "./components/Flatform";
import Invite from "./components/Invite";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

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
        {/* <Navbar user={this.state.user} clearUser={this.setUser} /> */}
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/signup"
          render={props => <Signup {...props} setUser={this.setUser} />}
        />
        <Route
          exact
          path="/signup/:flatId"
          render={props => <SignupFlatmate {...props} setUser={this.setUser} />}
        />
        <Route
          exact
          path="/login"
          render={props => <Login {...props} setUser={this.setUser} />}
        />
        <Route
          exact
          path="/create-flat"
          render={props => <Flatform {...props} user={this.state.user} />}
        />
        <Route
          exact
          path="/invite/:id"
          render={props => <Invite {...props} user={this.state.user} />}
        />
        <Route
          exact
          path="/dashboard"
          render={props => <Dashboard {...props} user={this.state.user} />}
        />
        <Route
          exact
          path="/profile"
          render={props => <Profile {...props} user={this.state.user} />}
        />
      </div>
    );
  }
}

export default App;
