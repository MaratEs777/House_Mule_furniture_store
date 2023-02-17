import React from "react";
import Item from "./Item";

function Items(props) {
  return (
    <main>
      {props.product.map((el) => (
        <Item key={el.id} item={el} onAdd={props.onAdd} />
      ))}
    </main>
  );
}

export default Items;
