import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  // navbar toggle on and off
  toggleClass = () => {
    this.state.active
      ? this.setState({ active: false })
      : this.setState({ active: true });
  };

  renderLogoutNav() {
    return (
      <div className={this.state.active ? "active" : "main-nav"}>
        <Link to="/home" className="nav-links">
          Home
        </Link>
        <br />
        <Link to="/add-item" className="nav-links">
          Add new item
        </Link>
        <br />
        <Link to="/item-history" className="nav-links">
          Items history
        </Link>
        <br />
        <Link onClick={this.props.handleLogOut} to="/" className="nav-links">
          Logout
        </Link>
        <br />
      </div>
    );
  }

  renderLoginNav() {
    return (
      <div className={this.state.active ? "active" : "main-nav"}>
        <Link to="/signup" className="nav-links">
          Sign Up
        </Link>
        <br />
        <Link
          to={{
            pathname: `/login`,
            demo: true,
          }}
          className="nav-links"
        >
          Demo
        </Link>
        <br />
        <Link to="/login" className="nav-links">
          Log in
        </Link>
      </div>
    );
  }

  render() {
    return (
      <nav className="navbar">
        <span className="navbar-toggle" onClick={this.toggleClass}>
          <i className="fas fa-bars"></i>
        </span>
        <div className="logo">logo</div>
        {this.props.auth ? this.renderLogoutNav() : this.renderLoginNav()}
      </nav>
    );
  }
}

export default NavBar;
