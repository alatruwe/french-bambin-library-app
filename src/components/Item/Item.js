import React from "react";
import ItemDetails from "../ItemDetails/ItemDetails";

export default function Item(props) {
  return (
    <section>
      <ItemDetails
        title={props.title}
        image={props.image}
        description={props.description}
      />
    </section>
  );
}
