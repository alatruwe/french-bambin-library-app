import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AuthApiService from "../../services/auth-api-services";
import TokenService from "../../services/token-services";
import ValidationError from "../ValidationError/ValidationError.js";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        value: "",
        touched: false,
      },
      password: {
        value: "",
        touched: false,
      },
      error: null,
    };
  }
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

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

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { email, password } = ev.target;

    AuthApiService.postLogin({
      email: email.value,
      user_password: password.value,
    })
      .then((res) => {
        email.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.history.push(`/home`);
        this.props.handleAuthSubmit();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  renderDemo() {
    return (
      <div>
        <p>Demo email: bill@email.com</p>
        <p>Demo password: 22AAaa@@</p>
      </div>
    );
  }

  render() {
    const emailError = this.validateEmail();
    const passwordError = this.validatePassword();

    return (
      <form onSubmit={this.handleSubmitJwtAuth}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => this.updateEmail(e.target.value)}
          />
          {this.state.email.touched && <ValidationError message={emailError} />}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
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

        <div>
          <button
            type="submit"
            disabled={this.validateEmail() || this.validatePassword()}
          >
            Log In
          </button>
        </div>
        {this.props.location.demo ? this.renderDemo() : <></>}
      </form>
    );
  }
}

export default withRouter(LoginForm);
