import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BsBoxSeam, BsSearch } from "react-icons/bs";
import { MdFaceUnlock, MdOutlinePlace } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import styled from "styled-components";
import { ButtonBlue } from "../styles/style";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const favorite = useSelector(state => state.favorite.favorite)
  const cart = useSelector(state => state.cart.cart)

  return (
    <Wrapper>
      <Top>
        <div className="address">
          <span>RUB</span>
          <a href="">
            <MdOutlinePlace />
            Тобольск
          </a>
          <a href="">Укажите адрес доставки</a>
        </div>

        <ul>
          <li>
            <a href="">Ozon для бизнеса</a>
          </li>
          <li>
            <a href="">Мобильное приложение</a>
          </li>
          <li>
            <a href="">Продавайте на Ozon</a>
          </li>
          <li>
            <a href="">Реферальная программа</a>
          </li>
          <li>
            <a href="">Подарочные сертификаты</a>
          </li>
          <li>
            <a href="">Помощь</a>
          </li>
        </ul>
      </Top>

      <Center>
        <Link to="/" className="logo">
          <img
            src="https://cdn1.ozone.ru/s3/cms/60/t3d/wc200/1doodle.png"
            alt=""
          />
        </Link>
        <ButtonBlue>
          <HiOutlineMenuAlt2 />
          Каталог
        </ButtonBlue>

        <div className="search">
          <button className="search__where">Везде</button>
          <input type="text" placeholder="Искать на Ozon" />
          <ButtonBlue>
            <BsSearch />
          </ButtonBlue>
        </div>

        <div className="actions">
          <div className="actions__item">
            <Link to="/">
              {" "}
              <span>26</span>
              <MdFaceUnlock />
              <strong>Даниил</strong>
            </Link>
          </div>
          <div className="actions__item">
            <Link to="/orders">
              <span>1</span>
              <BsBoxSeam />
              <strong>Заказы</strong>
            </Link>
          </div>
          <div className="actions__item">
            <Link to="favorite">
              <span>{favorite.length}</span>
              <AiOutlineHeart />
              <strong>Избранное</strong>
            </Link>
          </div>
          <div className="actions__item">
            <Link to="/cart">
              <span>{cart.length}</span>
              <CgShoppingCart />
              <strong>Корзина</strong>
            </Link>
          </div>
        </div>
      </Center>

      <Bottom>
        <li>
          <a href="">TOP Fashion</a>
        </li>
        <li>
          <a href="">Premium</a>
        </li>
        <li>
          <a href="">Билеты и Отели</a>
        </li>
        <li>
          <a href="">TOP Fashion</a>
        </li>
        <li>
          <a href="">Premium</a>
        </li>
        <li>
          <a href="">Билеты и Отели</a>
        </li>
        <li>
          <a href="">TOP Fashion</a>
        </li>
        <li>
          <a href="">Premium</a>
        </li>
        <li>
          <a href="">Билеты и Отели</a>
        </li>
        <li>
          <a href="">TOP Fashion</a>
        </li>
        <li>
          <a href="">Premium</a>
        </li>
        <li>
          <a href="">Билеты и Отели</a>
        </li>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 30px;
`;

const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 0;

  .address {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const Center = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  padding: 10px 0;

  .logo {
    img {
      max-width: 127px;
    }
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
  }

  .search {
    display: flex;
    flex: 1 1 auto;
    border: 1px solid #005bff;
    padding: 3px;

    ${ButtonBlue} {
      margin-left: auto;
      padding: 10px 30px;
    }
  }

  .actions {
    display: flex;
    flex: 0 1 360px;
    justify-content: space-between;
  }

  .actions__item {
    a {
      position: relative;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }

    span {
      position: absolute;
      top: 0;
      right: 0;
      background-color: #f91155;
      color: #fff;
      padding: 0 8px;
      border-radius: 8px;
      height: 16px;
      line-height: 17px;
      font-size: 12px;
      transform: translate(20%, -50%);
    }

    svg {
      font-size: 24px;
    }
  }
`;

const Bottom = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

export default Header;
