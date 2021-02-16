import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ItemDetails extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  // redirect to SendRequestForm
  handleSendRequest(event) {
    event.preventDefault();
    this.props.history.push(`/request`);
  }

  render() {
    const { title, description, image } = this.props;
    return (
      <div>
        <div>
          <h2>{title}</h2>
          <img src={image} width="250" height="250" />
          <p>{description}</p>
        </div>
        <button type="button" onClick={(e) => this.handleSendRequest(e)}>
          Send a request
        </button>
      </div>
    );
  }
}

export default withRouter(ItemDetails);
