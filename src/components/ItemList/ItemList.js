import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import data from "../../data.js";

// API call here to get data

export default class ItemList extends React.Component {
  static defaultProps = {};

  render() {
    return (
      <section className="item-list">
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <Item
                title={item.title}
                image={item.img}
                description={item.description}
              />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
