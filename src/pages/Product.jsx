import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonBlue } from "../styles/style";
import { GrFavorite } from "react-icons/gr";
import { addToFavorite } from "../redux/slices/favoriteSlice";
import { useDispatch } from "react-redux";

const Product = (props) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <nav className="top__nav">
        <ul className="breadcrumb">
          <li>
            <Link to="/">Аксессуары</Link>
          </li>
          <li>
            <Link to="/">Мужчинам</Link>
          </li>
          <li>
            <Link to="/">Часы и аксессуары</Link>
          </li>
          <li>
            <Link to="/">Наручные часы</Link>
          </li>
          <li>
            <Link to="/">33 ELEMENT</Link>
          </li>
        </ul>
        <ul className="top__nav-left">
          <li>Код товара: 150168848</li>
          <li>
            <button>Поделиться</button>
          </li>
        </ul>
      </nav>
      <div className="content">
        <div className="content__image">
          <img src="https://cdn1.ozone.ru/multimedia/wc1200/1027739591.jpg" alt="" />
        </div>
        <div className="content__info">
          <h3>Наручные часы 33 ELEMENT Серия 7-26 </h3>
          <div className="content__price">
            <span className="now">7 147 ₽</span>
            <span className="old">9 127 ₽</span>
          </div>
          <div className="content__btns">
            <ButtonBlue>Добавить в корзину</ButtonBlue>
            <ButtonBlue>
              <GrFavorite onClick={() => dispatch(addToFavorite(props))} />
            </ButtonBlue>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Product;

const Wrapper = styled.div`
  .top__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    &-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  .breadcrumb {
    gap: 20px;
  }

  .content {
    display: flex;
    justify-content: center;
    gap: 60px;

    &__image {

      img {
        object-fit: cover;
        width: 600px;
        height: 700px;
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      gap: 20px;

      h3 {
        font-size: 24px;
      }
    }

    &__price {
      font-size: 30px;
      font-weight: 700;
      display: flex;
      align-items: flex-end;
      gap: 10px;

      .now {
        color: #f91155;
      }

      .old {
        font-size: 20px;
        text-decoration: line-through;
      }
    }

    &__btns {
      display: flex;
      gap: 20px;
    }
  }



`;