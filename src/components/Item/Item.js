import React from "react";
import { withRouter } from "react-router-dom";

class Item extends React.Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  // redirect to SendRequestForm
  handleSendRequest = (event) => {
    event.preventDefault();
    const id = this.props.id;
    this.props.history.push({
      pathname: `/request`,
      itemId: id,
    });
  };
  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <img src={this.props.image} width="250" height="250" />
        <p>{this.props.description}</p>
        <button type="button" onClick={(e) => this.handleSendRequest(e)}>
          Send a request
        </button>
      </section>
    );
  }
}

export default withRouter(Item);
