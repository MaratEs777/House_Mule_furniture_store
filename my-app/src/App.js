import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Items from "./components/items/Items";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { notify } from "./utils/notyfy"; // Уведомления
import { products } from "./utils/products"; // object products
import Categories from "./components/category/Categories";
import ShowFullItem from "./components/ShowFullItem/ShowFullItem";

function App() {
  // const [goodsShop] = useState(products);
  const [basket, setBasket] = useState(products);
  let   [newObj, setNewObj] = useState((products.newArr = basket.items));
  const [showFullItem, setShowFullItem] = useState(false)
  let [fullItem, setFullItem] = useState({})

  const deleteOrder = (id) => {
    setBasket({ orders: basket.orders.filter((el) => el.id !== id) });
  };

  const addToOrder = (item) => {
    let isInArray = false;
    basket.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
      // console.log(isInArray);
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
    setFullItem(fullItem = item)
    setShowFullItem(!showFullItem)
  }

  return (
    <div className="wrapper">
      <Header orders={basket.orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items onShowItem={onShowItem} product={newObj} onAdd={addToOrder} />
      {showFullItem && <ShowFullItem onShowItem={onShowItem} onAdd={addToOrder} item={fullItem}/>}
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
