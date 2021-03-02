import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AuthApiService from "../../services/auth-api-services";
import TokenService from "../../services/token-services";
import ValidationError from "../ValidationError/ValidationError.js";
import ButtonStyling from "../../services/buttons-styling-services";

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

    const { firstName, lastName, email, password } = event.target;

    this.setState({ error: null });

    AuthApiService.postUser({
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      user_password: password.value,
    })
      .then((res) => {
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.history.push(`/home`);
        this.props.handleAuthSubmit();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  }

  render() {
    const firstNameError = this.validateFirstName();
    const lastNameError = this.validateLastName();
    const emailError = this.validateEmail();
    const passwordError = this.validatePassword();
    const repeatPasswordError = this.validateRepeatPassword();

    return (
      <section className="wrapper">
        <h1 className="form-title">
          <span>Sign Up</span>
        </h1>
        <div className="form">
          <form className="form-details" onSubmit={(e) => this.handleSubmit(e)}>
            <div>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First name"
                className="rounded-input"
                onChange={(e) => this.updateFirstName(e.target.value)}
              />
              {this.state.firstName.touched && (
                <ValidationError message={firstNameError} />
              )}
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last name"
                className="rounded-input"
                onChange={(e) => this.updateLastName(e.target.value)}
              />
              {this.state.lastName.touched && (
                <ValidationError message={lastNameError} />
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="rounded-input"
                onChange={(e) => this.updateEmail(e.target.value)}
              />
              {this.state.email.touched && (
                <ValidationError message={emailError} />
              )}
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="rounded-input"
                onChange={(e) => this.updatePassword(e.target.value)}
              />

              {this.state.password.touched && (
                <ValidationError message={passwordError} />
              )}
            </div>
            <div>
              <input
                type="password"
                name="repeatPassword"
                id="repeatPassword"
                placeholder="Repeat passord"
                className="rounded-input"
                onChange={(e) => this.updateRepeatPassword(e.target.value)}
              />
              {this.state.repeatPassword.touched && (
                <ValidationError message={repeatPasswordError} />
              )}
            </div>

            <div className="form-btn">
              <button
                type="submit"
                className="btn"
                style={{ color: ButtonStyling.buttonColor() }}
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
        </div>
      </section>
    );
  }
}

export default withRouter(SignupForm);
