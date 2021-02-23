import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import data from "../../data.js";
import ItemsApiService from "../../services/items-api-services";

export default class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      touched: false,
    };
  }
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  // API call here to get data
  componentDidMount() {
    ItemsApiService.getItems().then((res) => {
      this.setState({ items: res });
      console.log(this.state.items);
    });
  }

  // redirect to SendRequestForm
  handleSendRequest(event) {
    event.preventDefault();
    this.props.history.push(`/request`);
  }

  render() {
    const items = this.state.items;
    return (
      <section className="item-list">
        <h1>Items list</h1>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Item
                title={item.title}
                image={item.img}
                description={item.description}
              />
              <button type="button" onClick={(e) => this.handleSendRequest(e)}>
                Send a request
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
