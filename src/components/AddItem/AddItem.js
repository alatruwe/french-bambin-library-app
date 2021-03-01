import React, { Component } from "react";
import ValidationError from "../ValidationError/ValidationError.js";
import PicturePreview from "../PicturePreview/PicturePreview";
import ItemsApiService from "../../services/items-api-services";
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
      <section>
        <h2>New Item</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="item-title-input">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              onChange={(e) => this.updateItemTitle(e.target.value)}
            />
            {this.state.touched && <ValidationError message={titleError} />}
          </div>
          <div className="field">
            <label htmlFor="item-content-input">Description</label>
            <textarea
              id="description"
              name="description"
              value={this.state.description}
              onChange={(e) => this.updateItemDescription(e.target.value)}
            />
            {this.state.touched && <ValidationError message={contentError} />}
          </div>

          <div className="button">
            <button
              type="submit"
              disabled={
                this.validateItemTitle() || this.validateItemDescription()
              }
            >
              Add item
            </button>
            {this.state.added && <p>Item added!</p>}
          </div>
        </form>
      </section>
    );
  }
}
