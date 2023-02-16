import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Items from "./Items";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { notify } from "./notyfy"; // Уведомления
import { products } from "./products"; // object products

function App() {
  const [goodsShop, setGoodShop] = useState(products);
  const [basket, setBasket] = useState(products);

  const addToOrder = (item) => {
    let isInArray = false;
    basket.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
      console.log(isInArray);
    });

    if (!isInArray) {
      setBasket({ orders: [...basket.orders, item] });
      notify();
    }
  };

  return (
    <div className="wrapper">
      <Header orders={basket.orders} />
      <Items product={goodsShop} onAdd={addToOrder} />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
