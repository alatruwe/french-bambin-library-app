import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import ValidationError from "../ValidationError/ValidationError.js";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: {
        value: "",
        touched: false,
      },
      lastName: {
        value: "",
        touched: false,
      },
      email: {
        value: "",
        touched: false,
      },
      password: {
        value: "",
        touched: false,
      },
      repeatPassword: {
        value: "",
        touched: false,
      },
    };
  }

  updateFirstName(name) {
    this.setState({ firstName: { value: name, touched: true } });
  }
  updateLastName(name) {
    this.setState({ lastName: { value: name, touched: true } });
  }
  updateEmail(email) {
    this.setState({ email: { value: email, touched: true } });
  }
  updatePassword(password) {
    this.setState({
      password: {
        value: password,
        touched: true,
      },
    });
  }
  updateRepeatPassword(repeatPassword) {
    this.setState({
      repeatPassword: { value: repeatPassword, touched: true },
    });
  }

  validateFirstName() {
    const firstName = this.state.firstName.value.trim();
    if (firstName.length === 0) {
      return "Name is required";
    } else if (firstName.length < 3) {
      return "Name must be at least 3 characters long";
    }
  }
  validateLastName() {
    const lastName = this.state.lastName.value.trim();
    if (lastName.length === 0) {
      return "Name is required";
    } else if (lastName.length < 3) {
      return "Name must be at least 3 characters long";
    }
  }
  validateEmail() {
    const email = this.state.email.value.trim();
    if (email.length === 0) {
      return "Email is required";
    }
  }
  validatePassword() {
    const password = this.state.password.value.trim();
    if (password.length === 0) {
      return "Password is required";
    } else if (password.length < 6 || password.length > 72) {
      return "Password must be between 6 and 72 characters long";
    } else if (!password.match(/[0-9]/)) {
      return "Password must contain at least one number";
    }
  }
  validateRepeatPassword() {
    const repeatPassword = this.state.repeatPassword.value.trim();
    const password = this.state.password.value.trim();

    if (repeatPassword !== password) {
      return "Passwords do not match";
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/home`);
    this.props.handleAuthSubmit();
  }

  render() {
    const firstNameError = this.validateFirstName();
    const lastNameError = this.validateLastName();
    const emailError = this.validateEmail();
    const passwordError = this.validatePassword();
    const repeatPasswordError = this.validateRepeatPassword();

    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="name">First name :</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={(e) => this.updateFirstName(e.target.value)}
          />
          {this.state.firstName.touched && (
            <ValidationError message={firstNameError} />
          )}
        </div>
        <div className="form-group">
          <label htmlFor="name">Last name :</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={(e) => this.updateLastName(e.target.value)}
          />
          {this.state.lastName.touched && (
            <ValidationError message={lastNameError} />
          )}
        </div>
        <div className="form-group">
          <label htmlFor="name">Email :</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => this.updateEmail(e.target.value)}
          />
          {this.state.email.touched && <ValidationError message={emailError} />}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => this.updatePassword(e.target.value)}
          />

          {this.state.password.touched && (
            <ValidationError message={passwordError} />
          )}
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat Password *</label>
          <input
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            onChange={(e) => this.updateRepeatPassword(e.target.value)}
          />
          {this.state.repeatPassword.touched && (
            <ValidationError message={repeatPasswordError} />
          )}
        </div>

        <div className="registration__button__group">
          <button
            type="submit"
            disabled={
              this.validateFirstName() ||
              this.validateLastName() ||
              this.validateEmail() ||
              this.validatePassword() ||
              this.validateRepeatPassword()
            }
          >
            Sign Up!
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(SignupForm);
