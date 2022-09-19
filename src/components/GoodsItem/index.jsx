import React from "react";
import styled from "styled-components";
import { ButtonBlue } from "../../styles/style";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { GrFavorite } from "react-icons/gr";
import { addToFavorite } from "../../redux/slices/favoriteSlice";
import { Link } from "react-router-dom";
import { useDate } from "../../hooks/useDate";
import { useEffect } from "react";

export default function GoodsItem(item) {
  const dispatch = useDispatch();
  const {
    "delivery-date": deliveryDate,
    id,
    title,
    price,
    "old-price": oldPrice,
    discount,
    img,
  } = item;

  return (
    <Wrapper>
      <div className="favorite__icon">
        <GrFavorite onClick={() => dispatch(addToFavorite(item))} />
      </div>
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="content">
        <div className="prices">
          <span className="discount">-{discount}%</span>
          <strong className="price">{price} ₽</strong>
          <strong className="price-old">{oldPrice} ₽</strong>
        </div>
        <h4>
          <Link to={`/product/${id}`}>
            {title.split(" ").slice(0, 5).join(" ")} ...
          </Link>
        </h4>
        <div className="content-bottom">
          <ButtonBlue onClick={() => dispatch(addToCart(item))}>
            В корзину
          </ButtonBlue>
          <p>
            <span>19 июля</span> доставит Ozon
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  flex: 0 1 216px;
  display: flex;
  gap: 5px 0;
  align-self: stretch;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;

  .image {
    max-height: 280px;
  }

  .favorite__icon {
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    font-size: 24px;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 6px;
  }

  .discount {
    background-color: #f91155;
    display: inline-block;
    position: absolute;
    top: -18px;
    left: 0;
    color: #fff;
    padding: 2px;
    border-radius: 4px;
    height: 15px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .prices {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .price {
    background-color: #10c44c;
    color: #fff;
    font-size: 20px;
    padding: 3px 5px;
    border-radius: 5px;
    display: inline-block;
  }

  .price-old {
    text-decoration: line-through;
  }

  ${ButtonBlue} {
    align-self: flex-start;
    margin-bottom: 10px;
  }
`;
