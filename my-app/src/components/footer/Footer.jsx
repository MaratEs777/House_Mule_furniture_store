import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const FooterTitle = styled.footer`
  text-align: center;
  margin-top: 25px;
`;

function Footer() {
  return (
    <>
      <Link
        to={"/offer"}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          textDecoration: "none",
          cursor: "pointer",
          color: "red",
          fontSize: '13px'
        }}
      >
        Ваши жалобы и предложения
      </Link>
      <FooterTitle>Все права защищены &copy;</FooterTitle>
    </>
  );
}

export default Footer;
