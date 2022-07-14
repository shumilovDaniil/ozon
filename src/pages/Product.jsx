import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { ButtonBlue } from "../styles/style";
import { GrFavorite } from "react-icons/gr";
import { addToFavorite } from "../redux/slices/favoriteSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const { title, price, "old-price": oldPrice, discount, img } = post;


  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`http://localhost:3001/posts/${id}`);
      const data = await response.json();
      setPost(data);
    };
    fetchPost();
  }, []);

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
          <img src={img} alt="" />
        </div>
        <div className="content__info">
          <h3>{title}</h3>
          <div className="content__price">
            <span className="now">{price} ₽</span>
            <span className="old">{oldPrice} ₽</span>
          </div>
          <div className="content__btns">
            <ButtonBlue onClick={() => dispatch(addToCart(post))}>Добавить в корзину</ButtonBlue>
            <ButtonBlue>
              <GrFavorite onClick={() => dispatch(addToFavorite(post))} />
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
        width: 400px;
        height: 560px;
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