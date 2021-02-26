import React from "react";
import { withRouter } from "react-router-dom";
import ItemsApiService from "../../services/items-api-services";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userHistory: false,
      deleted: false,
    };
  }
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

  // API call to delete data
  handleDeleteItem = (event) => {
    event.preventDefault();
    console.log("Item deleted");
    const id = this.props.id;
    ItemsApiService.deleteItem(id).then(() => {
      this.setState({ deleted: true });
    });
  };

  renderDeleteButton() {
    return (
      <div>
        <button onClick={this.handleDeleteItem}>Delete item</button>
      </div>
    );
  }
  renderRequestButton() {
    return (
      <div>
        <button type="button" onClick={(e) => this.handleSendRequest(e)}>
          Send a request
        </button>
      </div>
    );
  }

  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <img src={this.props.image} width="250" height="250" />
        <p>{this.props.description}</p>

        {this.props.userHistory
          ? this.renderDeleteButton()
          : this.renderRequestButton()}

        {this.state.deleted && <p>Deleted!</p>}
      </section>
    );
  }
}

export default withRouter(Item);
