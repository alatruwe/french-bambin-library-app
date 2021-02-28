import React from "react";
import Item from "../Item/Item";
import ItemsApiService from "../../services/items-api-services";
import config from "../../config";
export default class ItemHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  // API call here to get data
  componentDidMount() {
    ItemsApiService.getItemHistory().then((res) => {
      this.setState({ items: res });
    });
  }

  render() {
    const items = this.state.items;
    let source = config.IMAGE_URL;
    return (
      <section className="item-list">
        <h1>Items history</h1>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Item
                title={item.title}
                image={source + item.image}
                description={item.description}
                id={item.id}
                userHistory={true}
                itemHasBeenDeleted={this.itemHasBeenDeleted}
              />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
