import React, { Component } from "react";
import ValidationError from "../ValidationError/ValidationError.js";
import ItemsApiService from "../../services/items-api-services";

export default class SendRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {
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

  updateSubject(subject) {
    this.setState({ subject: { value: subject, touched: true } });
  }
  updateMessage(message) {
    this.setState({
      message: {
        value: message,
        touched: true,
      },
    });
  }
  validateSubject() {
    const subject = this.state.subject.value.trim();
    if (subject.length === 0) {
      return "Email subject is required";
    }
  }
  validateMessage() {
    const message = this.state.message.value.trim();
    if (message.length === 0) {
      return "A message is required";
    }
  }

  // API call to send request
  handleSubmit = (event) => {
    event.preventDefault();
    const itemId = this.props.location.itemId;
    const subject = this.state.subject.value;
    const message = this.state.message.value;

    let info = {
      subject: subject,
      message: message,
      item_id: itemId.toString(),
    };
    console.log(info);

    // API POST request
    ItemsApiService.sendEmail(info)
      // reset form fields
      .then((res) => {
        event.target.subject.value = "";
        event.target.message.value = "";
      })
      // change state
      .then(() => {
        this.setState({
          subject: {
            value: "",
            touched: false,
          },
          message: {
            value: "",
            touched: false,
          },
          sent: true,
        });
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const subjectError = this.validateSubject();
    const messageError = this.validateMessage();

    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="text">Object</label>
          <input
            type="text"
            name="subject"
            value={this.state.subject.value}
            id="subject"
            placeholder="I'm interested in your item"
            required
            onChange={(e) => this.updateSubject(e.target.value)}
          />
          {this.state.subject.touched && (
            <ValidationError message={subjectError} />
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
            disabled={this.validateSubject() || this.validateMessage()}
          >
            Send
          </button>
          {this.state.sent && <p>Sent!</p>}
        </div>
      </form>
    );
  }
}
