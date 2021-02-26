import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

class NavBar extends Component {
  renderLogoutNav() {
    return (
      <div>
        <Link to="/home">Home</Link>
        <br />
        <Link to="/add-item">Add new item</Link>
        <br />
        <Link to="/item-history">Items history</Link>
        <br />
        <Link onClick={this.props.handleLogOut} to="/">
          Logout
        </Link>
        <br />
      </div>
    );
  }

  renderLoginNav() {
    return (
      <div>
        <Link to="/signup">Sign Up</Link>
        <br />
        <Link
          to={{
            pathname: `/login`,
            demo: true,
          }}
        >
          Demo
        </Link>
        <br />
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
