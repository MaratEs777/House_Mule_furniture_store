import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Items from "../components/items/Items";
import ShowFullItem from "../components/ShowFullItem/ShowFullItem";
import Categories from "../components/category/Categories";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { notify } from "../utils/notyfy";
import { products } from "../utils/products";

function Layout() {
  const [basket, setBasket] = useState(products);
  let [newObj, setNewObj] = useState((products.newArr = basket.items));
  const [showFullItem, setShowFullItem] = useState(false);
  let [fullItem, setFullItem] = useState({});

  const deleteOrder = (id) => {
    setBasket({ orders: basket.orders.filter((el) => el.id !== id) });
  };

  const addToOrder = (item) => {
    let isInArray = false;
    basket.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });

    if (!isInArray) {
      setBasket({ orders: [...basket.orders, item] });
      notify();
    }
  };

  const chooseCategory = (category) => {
    if (category === "all") {
      setNewObj((newObj = basket.items));
      return;
    }
    setNewObj(basket?.items?.filter((el) => el.category === category));
  };

  const onShowItem = (item) => {
    setFullItem((fullItem = item));
    setShowFullItem(!showFullItem);
  };
  return (
    <div className="wrapper">
      <Header orders={basket.orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items onShowItem={onShowItem} product={newObj} onAdd={addToOrder} />
      {showFullItem && (
        <ShowFullItem
          onShowItem={onShowItem}
          onAdd={addToOrder}
          item={fullItem}
        />
      )}
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Layout;
