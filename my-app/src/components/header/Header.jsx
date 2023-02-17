import { useState } from "react";
import { FaShoppingBag, FaStickerMule } from "react-icons/fa";
import Order from "../order/Order";

const showOrders = (props) => {
  let sum = 0;
  props.orders.forEach((el) => (sum += Number.parseFloat(el.price)));
  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} onDelete={props.onDelete} />
      ))}
      <p className="sum">Сумма: {new Intl.NumberFormat().format(sum)}$</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Товаров в корзине нет</h2>
    </div>
  );
};

function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);
  const [aboutUs, setAboutUs] = useState(false);
  const [contact, setContact] = useState(false)
  return (
    <header>
      <div>
        <span className="logo">House Mule</span>
        <FaStickerMule className="mule" />
        <ul className="nav">
          <li
            className={`about-us ${aboutUs && "active"}`}
            onClick={() => {
              setAboutUs((!aboutUs));
            }}
          >
            Про нас
          </li>
          {aboutUs && (
            <div className="aboutUs">
              <h2>
                «Creating Comfort - Cоздавая Уют».
                <br />
                Вот уже 10 лет мы помогаем нашим клиентам создавать уют в своих
                домах.
                <br />
                House Mule - Мебель VIP класса для VIP клиентов.
              </h2>
            </div>
          )}
          <li
            className={`contact ${contact && "active"}`}
            onClick={() => {
              setContact((!contact));
            }}
          >
            Контакты
          </li>
          {contact && (
            <div className="contacts">
              <h2>номер телефона : +7-918-835-25-45</h2>
            </div>
          )}
          <li>Кабинет</li>
        </ul>
        <FaShoppingBag
          className={`shop-cart-button ${cartOpen && "active"}`}
          onClick={() => {
            setCartOpen((!cartOpen));
          }}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}

export default Header;
