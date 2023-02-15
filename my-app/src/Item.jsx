import React from "react";

function Item(props) {
  return (
    <div>
      <img src={"./img/" + props.item.img} alt={"no_photo"} />
      <h2>{props.item.title}</h2>
      <p>{props.item.desc}</p>
      <b>{props.item.price}$</b>
      <div className="add-to-cart"> + </div>
    </div>
  );
}

export default Item;
