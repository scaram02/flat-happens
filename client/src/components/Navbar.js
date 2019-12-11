import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { Navbar as Nav } from "react-bootstrap";
import { logout } from "../services/auth";

const Navbar = props => {
  const handleLogout = () => {
    //
    console.log("click");
    logout();
    props.clearUser(null);
  };

  return (
    <Nav className="navbar-container" bg="basic">
      {props.user ? (
        <>
          <div>
          <p>Welcome {props.user.username}</p>
          </div>
          <div>
            <Link to="/" onClick={handleLogout}>
              Log out
            </Link>
            <Link to="/settings">
              <img className="settings-img" src="/images/settings.jpg" alt="" />
            </Link>
          </div>
        </>
      ) : (
        <React.Fragment>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Log in</Link>
        </React.Fragment>
      )}
    </Nav>
  );
};

export default Navbar;
