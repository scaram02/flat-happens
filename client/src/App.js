import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Flatform from "./components/Flatform";
import Invite from "./components/Invite";
import Weekbar from "./components/Weekbar";
import Profile from "./components/Profile";

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
          render={props => <Flatform {...props} user={this.state.user} />}
        />
        <Route
          exact
          path="/invite/:id"
          render={props => <Invite {...props} user={this.state.user} />}
        />
        <Route
          exact
          path="/flat"
          render={props => <Weekbar {...props} user={this.state.user} />}
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
