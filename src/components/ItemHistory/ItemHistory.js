import React from "react";
import Item from "../Item/Item";

import data from "../../data.js";

export default class ItemHistory extends React.Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  // API call here to get data

  // API call to delete data
  handleDeleteItem = (event) => {
    event.preventDefault();
    console.log("Item deleted");
    this.props.history.push("./item-history");
  };

  render() {
    return (
      <section className="item-list">
        <h1>Items history</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <Item
                title={item.title}
                image={item.img}
                description={item.description}
              />
              <button onClick={this.handleDeleteItem}>Delete item</button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
