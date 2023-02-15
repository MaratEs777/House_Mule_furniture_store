import React from "react";
import Item from "./Item";

function Items(props) {
  return (
    <main>
      {props.product.items.map((el) => (
       <Item key={el.id} item={el}/>
      ))}
      
    </main>
  );
}

export default Items;
