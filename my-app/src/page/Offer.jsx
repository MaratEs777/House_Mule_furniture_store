import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const notify = () => {
  toast.success("Спасибо за ваш отзыв!!!", {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
const Container = styled.div`
  position: relative;
  top: 15rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 28%;
  height: 27px;
  border: solid 1px green;
  margin-top: 18px;
  font-size: 16px;
`;

const Btn = styled.input`
  margin-top: 18px;
  width: 10rem;
  height: 2rem;
  border: solid 1px green;
  background: white;
  box-shadow: -10px 10px 15px 1px rgba(34, 60, 80, 0.26);
  border-radius: 9px;
  cursor: pointer;
`;

const Offer = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (d) => {
    console.log(JSON.stringify(d));
    notify();
  };
  return (
    <Container>
      <Link
        to={"/"}
        style={{
          position: "relative",
          bottom: "10rem",
          left: "46%",
          color: 'orange',
          textDecoration: "none",
          cursor: "pointer",
          borderRadius: "3px",
          fontSize: "18px",
        }}
      >
        На Главную
      </Link>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label style={{ color: "green", fontSize: "15px" }}>
          Пожалуйста введите в поле ниже ваше пожелание или жалобу.
        </label>
        <Input {...register("Offers ==>>")} />
        <Btn type={"submit"} value={"Отправить"} />
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default Offer;
