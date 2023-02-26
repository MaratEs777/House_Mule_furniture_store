import React from "react";
import Header from "../components/header/Header";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
  background-color: #f8f8ff;
  /* opacity: 1; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: solid 1px black; */
  position: relative;
  top: 20px;
  box-shadow: -15px 15px 17px 1px rgba(34, 60, 80, 0.26);
  line-height: 50px;
`;

const Title = styled.h1`
  margin-top: 20px;
  font-size: 20px;
  background: linear-gradient(
    219deg,
    var(--color-1) 19%,
    /* transparent 19%, */ /* transparent 20%, */ var(--color-2) 20%,
    var(--color-2) 39%,
    /* transparent 39%, */ /* transparent 40%, */ var(--color-3) 40%,
    var(--color-3) 59%,
    /* transparent 59%, */ /* transparent 60%, */ var(--color-4) 60%,
    var(--color-4) 79%,
    /* transparent 79%, */ /* transparent 80%, */ var(--color-5) 80%
  );
  /* обрезаем фон по контуру букв */
  background-clip: text;
  -webkit-background-clip: text;

  ///делаем заголовок прозрачным, чтобы был виден цветной фон
  color: transparent;
`;

const News = styled.h3`
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
  color: black;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;
const URL = "https://jsonplaceholder.typicode.com/posts?_limit=7";

const NewsPage = () => {
  const [items, setItems] = useState([]);
  const [errores, setErrores] = useState("");

  useEffect(() => {
    const getAllData = async () => {
      try {
        const res = await fetch(URL);
        const req = await res.json();
        setItems(req);
        console.log(req);
      } catch (e) {
        setErrores("404", e);
      }
    };
    getAllData();
  }, []);

  if (errores) {
    return (
      <Title style={{ fontSize: "100px", marginLeft: "500px" }}>
        {errores}
      </Title>
    );
  } else {
    return (
      <div className="wrapper">
        <Header />
        <Container>
          <Title>Все о диванах в House Mule</Title>
          <ImgContainer>
            <img
              style={{
                width: "100%",
                height: "31rem",
                boxShadow: "-20px 25px 25px 3px rgba(34, 60, 80, 0.26)",
              }}
              src="https://bigfoto.name/uploads/posts/2021-12/1638699028_6-bigfoto-name-p-cherno-beloe-s-krasnim-aktsentom-v-interer-7.jpg"
              alt="Italian Trulli"
            />
          </ImgContainer>
          {items.map((item) => (
            <News key={item.id}>
              {item.id}. {item.title} --- Представить дом, квартиру без дивана
              практически невозможно. Популярность этой мебели настолько широка,
              что многие покупают раскладные модели и используют их в качестве
              кровати. Диван помогает сэкономить пространство и обустроить
              уютное место отдыха. Идеальный диван должен быть функциональным,
              удобным, а также подходить под интерьер помещения. Чтобы сделать
              правильный выбор, важно остановиться на каждой характеристике
              подробнее и понять, что именно подходит под поставленные цели.
              <br />
              {item.body}
            </News>
          ))}
        </Container>
      </div>
    );
  }
};

export default NewsPage;
