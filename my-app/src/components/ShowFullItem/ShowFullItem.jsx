import React from "react";
import { FaDirections } from "react-icons/fa";

function ShowFullItem(props) {
  return (
    <div className="full-item">
      <div>
        <FaDirections className="Show-button" onClick={() =>  props.onShowItem(props.item)}/>
        <img
          src={"./img/" + props.item.img}
          alt={"no_photo"}
          onClick={() => props.onShowItem(props.item)}
        />
        <h2>{props.item.title}</h2>
        <p>{props.item.desc}</p>
        <b>{props.item.price}$</b>
        <div
          className="add-to-cart"
          onClick={() => {
            props.onAdd(props.item);
          }}
        >
          +
        </div>
      </div>
    </div>
  );
}

export default ShowFullItem;
