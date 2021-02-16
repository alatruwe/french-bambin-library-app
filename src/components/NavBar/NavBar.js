import React, { Component } from "react";
import { Router, NavLink, Link } from "react-router-dom";

import "./NavBar.css";

class NavBar extends Component {
  renderLogoutNav() {
    return (
      <div>
        <Link to="/home">Home</Link>

        <Link to="/add-item">Add new item</Link>
        <Link onClick={this.props.handleLogOut} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginNav() {
    return (
      <div>
        <Link to="/signup">Sign Up</Link>

        <Link to="/login">Log in</Link>
      </div>
    );
  }

  render() {
    return (
      <nav>
        {this.props.auth ? this.renderLogoutNav() : this.renderLoginNav()}
      </nav>
    );
  }
}

export default NavBar;
