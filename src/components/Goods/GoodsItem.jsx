import React from "react";
import styled from "styled-components";
import { ButtonBlue } from "../../styles/style";
import { addToCart } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function GoodsItem(props) {
  const {
    "delivery-date": deliveryDate,
    id,
    title,
    price,
    "old-price": oldPrice,
    discount,
    img,
  } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  return (
    <Wrapper>
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="content">
        <div className="prices">
          <span className="discount">-{discount}%</span>
          <strong className="price">{price} ₽</strong>
          <strong className="price-old">{oldPrice} ₽</strong>
        </div>
        <h4>{title}</h4>
        <div className="content-bottom">
          <ButtonBlue onClick={() => dispatch(addToCart(props))}>
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
  flex: 0 1 216px;
  display: flex;
  gap: 5px 0;

  align-self: stretch;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: end;

  .image {
    max-height: 280px;
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
