import { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";

function Header() {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingBag
          className={`shop-cart-button ${cartOpen && "active"}`}
          onClick={() => {
            setCartOpen((cartOpen = !cartOpen));
          }}
        />
        {cartOpen && (
          <div className="shop-cart">

          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}

export default Header;
