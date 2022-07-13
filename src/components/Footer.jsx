import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <div className="footer__content">
          <List>
            <li>
              <Link to="/">Зарабатывайте с Ozon</Link>
            </li>
            <li>
              <Link to="/">Ваши товары на Ozon</Link>
            </li>
            <li>
              <Link to="/">Продавайте на Ozon</Link>
            </li>
            <li>
              <Link to="/">Реферальная программа</Link>
            </li>
            <li>
              <Link to="/">Установите постамат Ozon Box</Link>
            </li>
            <li>
              <Link to="/">Откройте пункт выдачи Ozon</Link>
            </li>
            <li>
              <Link to="/">Стать Поставщиком Ozon</Link>
            </li>
            <li>
              <Link to="/">Что продавать на Ozon</Link>
            </li>
            <li>
              <Link to="/">Selling on Ozon</Link>
            </li>
          </List>
          <List>
            <li>
              <Link to="/">Зарабатывайте с Ozon</Link>
            </li>
            <li>
              <Link to="/">Ваши товары на Ozon</Link>
            </li>
            <li>
              <Link to="/">Продавайте на Ozon</Link>
            </li>
            <li>
              <Link to="/">Реферальная программа</Link>
            </li>
            <li>
              <Link to="/">Установите постамат Ozon Box</Link>
            </li>
            <li>
              <Link to="/">Откройте пункт выдачи Ozon</Link>
            </li>
            <li>
              <Link to="/">Стать Поставщиком Ozon</Link>
            </li>
          </List>
          <List>
            <li>
              <Link to="/">Зарабатывайте с Ozon</Link>
            </li>
            <li>
              <Link to="/">Ваши товары на Ozon</Link>
            </li>

            <li>
              <Link to="/">Откройте пункт выдачи Ozon</Link>
            </li>
            <li>
              <Link to="/">Стать Поставщиком Ozon</Link>
            </li>
            <li>
              <Link to="/">Что продавать на Ozon</Link>
            </li>
            <li>
              <Link to="/">Selling on Ozon</Link>
            </li>
          </List>
          <List>
            <li>
              <Link to="/">Зарабатывайте с Ozon</Link>
            </li>
            <li>
              <Link to="/">Ваши товары на Ozon</Link>
            </li>
            <li>
              <Link to="/">Продавайте на Ozon</Link>
            </li>
            <li>
              <Link to="/">Реферальная программа</Link>
            </li>
            <li>
              <Link to="/">Установите постамат Ozon Box</Link>
            </li>
            <li>
              <Link to="/">Откройте пункт выдачи Ozon</Link>
            </li>
            <li>
              <Link to="/">Стать Поставщиком Ozon</Link>
            </li>
            <li>
              <Link to="/">Что продавать на Ozon</Link>
            </li>
            <li>
              <Link to="/">Selling on Ozon</Link>
            </li>
          </List>
          <div className="footer__info">
            <strong>
              © 1998 – 2022 ООО «Интернет Решения». Все права защищены.
            </strong>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  background-color: #efefef;
  margin-top: 50px;
  padding: 50px 0;

  .footer__content {
    display: flex;
    gap: 30px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
  color: #3d5165;
  gap: 15px;
`;
