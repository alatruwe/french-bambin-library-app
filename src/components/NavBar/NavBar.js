import React, { Component } from "react";
import { Router, NavLink, Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <NavLink exact to="/">
          Home
        </NavLink>
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </nav>
    );
  }
}

export default NavBar;
