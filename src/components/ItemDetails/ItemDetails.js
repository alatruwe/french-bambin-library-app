import React from "react";

export default class ItemDetails extends React.Component {
  static defaultProps = {};

  // add function handle click event "send an email"

  render() {
    const { title, description, image } = this.props;
    return (
      <div>
        <div>
          <h2>{title}</h2>
          <img src={image} width="250" height="250" />
          <p>{description}</p>
        </div>
        <button
          type="button"
          //onClick={this.handleSendEmail}
        >
          Send an request
        </button>
      </div>
    );
  }
}
