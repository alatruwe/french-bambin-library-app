import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import data from "../../data.js";

export default class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      touched: false,
    };
  }
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

  // API call here to get data

  render() {
    return (
      <section className="item-list">
        <h1>Items list</h1>
        <ul>
          {data.map((item) => (
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
