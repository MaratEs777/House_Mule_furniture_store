import { useState } from "react";
import { FaShoppingBag, FaStickerMule } from "react-icons/fa";
import Order from "../order/Order";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: relative;
`;
const LogoTitle = styled.span`
  font-weight: 600;
  font-size: 20px;
`;
const UlNav = styled.ul`
  float: right;
  list-style: none;
  transition: opacity 500ms ease;
`;

const LiNav = styled.li`
  display: inline;
  margin-left: 25px;
  cursor: pointer;
`;

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
  const [contact, setContact] = useState(false);
  let [activeState, setActiveState] = useState(false);

  return (
    <>
      <HeaderContainer>
        <div>
          <LogoTitle>House Mule</LogoTitle>
          <FaStickerMule style={{ fontSize: "20px", marginLeft: "10px" }} />

          <UlNav>
            <Link
              to="/news"
              className="linkTo"
              style={{
                paddingLeft: "20px",
                textDecoration: "none",
                fontFamily: "Montserrat",
              }}
              onClick={() => setActiveState(!activeState)}
            >
              News
            </Link>
            {console.log("active ==> ", activeState)}

            <LiNav
              className={`about-us ${aboutUs && "active"}`}
              onClick={() => {
                setAboutUs(!aboutUs);
              }}
            >
              Про нас
            </LiNav>
            {aboutUs && (
              <div className="aboutUs">
                <h2>
                  «Creating Comfort - Cоздавая Уют».
                  <br />
                  Вот уже 10 лет мы помогаем нашим клиентам создавать уют в
                  своих домах.
                  <br />
                  House Mule - Мебель VIP класса для VIP клиентов.
                </h2>
              </div>
            )}
            <LiNav
              className={`contact ${contact && "active"}`}
              onClick={() => {
                setContact(!contact);
              }}
            >
              Контакты
            </LiNav>
            {contact && (
              <div className="contacts">
                <h2>номер телефона : +7-918-835-25-45</h2>
              </div>
            )}
            <LiNav>Кабинет</LiNav>
          </UlNav>
          <FaShoppingBag
            className={`shop-cart-button ${cartOpen && "active"}`}
            onClick={() => {
              setCartOpen(!cartOpen);
            }}
          />
          {cartOpen && (
            <div className="shop-cart">
              {props.orders.length > 0 ? showOrders(props) : showNothing()}
            </div>
          )}
        </div>

        <div
          className={`presentation  ${activeState ? "presentation1" : ""}`}
        ></div>
      </HeaderContainer>
    </>
  );
}

export default Header;
