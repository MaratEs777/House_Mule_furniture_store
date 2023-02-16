import React from "react";

const Order = (props) => {
  return (
    <div className="item">
      <img src={"./img/" + props.item.img} alt={"no_photo"} />
      <h2>{props.item.title}</h2>
      <b>{props.item.price}$</b>
    </div>
  );
};

export default Order;
