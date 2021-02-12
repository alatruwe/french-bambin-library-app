import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-item">
          <h2>Log in</h2>
        </div>
        <div className="navbar-item">
          <h2>Sign Up</h2>
        </div>
      </div>
    );
  }
}

export default NavBar;
