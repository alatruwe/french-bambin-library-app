import React, { Component } from "react";
import ValidationError from "../ValidationError/ValidationError.js";
import ButtonStyling from "../../services/buttons-styling-services";
import ItemsApiService from "../../services/items-api-services";
import "./AddItem.css";
export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      touched: false,
      added: false,
      error: null,
    };
  }
  static defaultProps = {
    history: {
      push: () => {},
    },
    title: "",
    description: "",
  };

  // form name validation
  updateItemTitle(title) {
    this.setState({ title: title, touched: true });
  }

  validateItemTitle() {
    const title = this.state.title;
    if (title.length === 0) {
      return "Please enter a title";
    }
  }

  // form content validation
  updateItemDescription(content) {
    this.setState({ description: content, touched: true });
  }

  validateItemDescription() {
    const content = this.state.description;
    if (content.length === 0) {
      return "The description can't be empty";
    }
  }

  // handle submit
  handleSubmit = (e) => {
    e.preventDefault();

    // get media info
    const title = this.state.title;
    const description = this.state.description;
    let item = {
      title: title,
      description: description,
    };

    // API POST request
    ItemsApiService.postitem(item)
      // reset form fields
      .then(() => {
        e.target.title.value = "";
        e.target.description.value = "";
      })
      // change state
      .then(() => {
        this.setState({
          title: "",
          description: "",
          touched: false,
          added: true,
          error: null,
        });
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const titleError = this.validateItemTitle();
    const contentError = this.validateItemDescription();

    return (
      <section className="wrapper">
        <h1 className="form-title">
          <span>New book</span>
        </h1>
        <div className="form">
          <form className="form-details" onSubmit={this.handleSubmit}>
            <div>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                className="rounded-input"
                value={this.state.title}
                onChange={(e) => this.updateItemTitle(e.target.value)}
              />
              {this.state.touched && <ValidationError message={titleError} />}
            </div>
            <div>
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                className="rounded-input"
                value={this.state.description}
                onChange={(e) => this.updateItemDescription(e.target.value)}
              />
              {this.state.touched && <ValidationError message={contentError} />}
            </div>

            <div className="form-btn">
              <button
                type="submit"
                className="btn"
                style={{ color: ButtonStyling.buttonColor() }}
                disabled={
                  this.validateItemTitle() || this.validateItemDescription()
                }
              >
                Add item
              </button>
              {this.state.added && <p>Item added!</p>}
            </div>
          </form>
        </div>
      </section>
    );
  }
}
