import React, { Component } from "react";
import ValidationError from "../ValidationError/ValidationError.js";
import PicturePreview from "../PicturePreview/PicturePreview";

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      image: "",
      touched: false,
      upload: false,
    };
  }
  static defaultProps = {
    history: {
      push: () => {},
    },
    title: "",
    description: "",
    image: "",
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

  // image validation
  validateItemPicture() {
    const picture = this.state.image;
    if (picture.length === 0) {
      return "Please add a picture";
    }
  }

  // handle submit form
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(`/home`);
    // api POST here
  };

  // picture preview
  loadPicture = (event) => {
    const src = URL.createObjectURL(event.target.files[0]);
    this.setState({ image: src, upload: true, touched: true });
  };

  handleDeletePicture = () => {
    this.setState({ image: "", upload: false });
  };

  render() {
    const titleError = this.validateItemTitle();
    const contentError = this.validateItemDescription();
    const pictureError = this.validateItemPicture();
    const src = this.state.image;

    return (
      <section>
        <h2>New Item</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="item-title-input">Title</label>
            <input
              type="text"
              id="item-title-input"
              name="item-title"
              onChange={(e) => this.updateItemTitle(e.target.value)}
            />
            {this.state.touched && <ValidationError message={titleError} />}
          </div>
          <div className="field">
            <label htmlFor="item-content-input">Description</label>
            <textarea
              id="item-content-input"
              name="item-content"
              onChange={(e) => this.updateItemDescription(e.target.value)}
            />
            {this.state.touched && <ValidationError message={contentError} />}
          </div>
          <div>
            <label htmlFor="image">Add a picture:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/png, image/jpeg"
              onChange={this.loadPicture}
            />
            {this.state.touched && <ValidationError message={pictureError} />}
            {this.state.upload && (
              <PicturePreview src={src} delete={this.handleDeletePicture} />
            )}
          </div>
          <div className="button">
            <button
              type="submit"
              disabled={
                this.validateItemTitle() ||
                this.validateItemDescription() ||
                this.validateItemPicture()
              }
            >
              Add item
            </button>
          </div>
        </form>
      </section>
    );
  }
}
