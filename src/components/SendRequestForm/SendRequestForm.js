import React, { Component } from "react";
import ValidationError from "../ValidationError/ValidationError.js";

export default class SendRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      object: {
        value: "",
        touched: false,
      },
      message: {
        value: "",
        touched: false,
      },
      sent: false,
    };
  }
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  updateObject(object) {
    this.setState({ object: { value: object, touched: true } });
  }
  updateMessage(message) {
    this.setState({
      message: {
        value: message,
        touched: true,
      },
    });
  }

  // API call to send request
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      object: {
        value: "",
        touched: false,
      },
      message: {
        value: "",
        touched: false,
      },
      sent: true,
    });
  };
  validateObject() {
    const object = this.state.object.value.trim();
    if (object.length === 0) {
      return "Email object is required";
    }
  }
  validateMessage() {
    const message = this.state.message.value.trim();
    if (message.length === 0) {
      return "A message is required";
    }
  }

  render() {
    const objectError = this.validateObject();
    const messageError = this.validateMessage();

    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="text">Object</label>
          <input
            type="text"
            name="object"
            value={this.state.object.value}
            id="object"
            placeholder="I'm interested in your item"
            required
            onChange={(e) => this.updateObject(e.target.value)}
          />
          {this.state.object.touched && (
            <ValidationError message={objectError} />
          )}
        </div>
        <div className="form-group">
          <label htmlFor="text">Message</label>
          <textarea
            type="text"
            name="message"
            value={this.state.message.value}
            id="message"
            onChange={(e) => this.updateMessage(e.target.value)}
          />
          {this.state.message.touched && (
            <ValidationError message={messageError} />
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={this.validateObject() || this.validateMessage()}
          >
            Send
          </button>
          {this.state.sent && <p>Sent!</p>}
        </div>
      </form>
    );
  }
}
