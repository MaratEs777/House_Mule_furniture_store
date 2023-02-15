import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import Items from "./Items";

const products = {
 items : [
  {
    id : 1,
    title: 'стул серый',
    img : 'e4355defc43f2f664ffe659c077a2269.webp',
    desc: 'Italian fashion',
    category: 'chairs',
    price: '49.99'
  },

  {
    id : 2,
    title: 'Кровать 2-м',
    img : '6162266185.jpg',
    desc: 'Italian fashion',
    category: 'beds',
    price: '157.99'
  },

  {
    id : 3,
    title: 'стол кухня',
    img : '111828c3eb8c2cf04c79c95882o9--dlya-doma-i-interera-kuhonnyj-stol-iz-massiva-dereva-v-stile-.jpg',
    desc: 'Italian fashion',
    category: 'tables',
    price: '88.00'
  }
 ]
}
function App() {
  const [goodsShop, setGoodShop] = useState(products)
  return (
    <div className="wrapper">
      <Header />
      <Items product={goodsShop}/>
      <Footer />
    </div>
  );
}

export default App;
