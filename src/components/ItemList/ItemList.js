import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import ItemsApiService from "../../services/items-api-services";
import config from "../../config";

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
    });
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
                description={item.description}
                id={item.id}
                userHistory={false}
              />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
