import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import { fetchCart } from "./../redux/slices/cartSlice";
import { useSumCart } from "../hooks/useSumCart";

export default function Cart() {
  const dispatch = useDispatch();
  const cartGoods = useSelector((state) => state.cart.cart);
  const sumCart = useSumCart(cartGoods);

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  return (
    <Wrapper>
      <h2>
        Корзина <span>{cartGoods.length}</span>
      </h2>
      <div className="content">
        <div className="content__left">
          <div className="actions__top">
            <input className="checkbox" type="checkbox" id="check_all"></input>
            <label htmlFor="check_all">Выбрать всё</label>
            <button className="delete__btn">Удалить выбранные</button>
          </div>
          <div className="cart__items">
            {cartGoods.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
        </div>
        <div className="content__right">
          <div className="content__order">
            <button>Перейти к оформлению</button>
            <p>
              Доступные способы и время доставки можно выбрать при оформлении
              заказа
            </p>
          </div>

          <div className="your-cart">
            <div className="your-cart__block">
              <h3 className="your-cart__title">Ваша корзина</h3>
              <div className="your-cart__value">
                <span>{cartGoods.length} {cartGoods.length === 1 ? "товар" : cartGoods.length > 1 && cartGoods.length < 5 ? "товара" : "товаров"} </span>
                <span></span>
              </div>
            </div>

            <div className="your-cart__block">
              <span>Товары ({cartGoods.length})</span>
              <span>{sumCart} ₽</span>
            </div>
            <div className="your-cart__block">
              <div>
                <span>Скидка</span>
              </div>
              <span>300 ₽</span>
            </div>

            <div className="your-cart__block">
              <h3 className="your-cart__title">Общая стоимость</h3>
              <span>{sumCart - 300} ₽</span>
            </div>
            <div className="your-cart__block">
              <span>
                При оплате <Link to="/">Ozon Счётом</Link>
              </span>
              <span>{sumCart - 300} ₽</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h2 {
    position: relative;
    display: inline-block;
    font-size: 30px;
    font-weight: 700;
    padding: 7px 0;

    span {
      color: #707f8d;
      font-size: 18px;
      height: 20px;
      position: absolute;
      top: 8px;
      right: -12px;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }

  .content__left,
  .content__right {
    background-color: #fff;
    padding: 16px;
    border-radius: 2px;
  }

  .content__left {
    flex: 0 1 70%;
  }

  .actions__top {
    padding: 10px 0;
    margin-bottom: 30px;
    display: flex;
    gap: 10px;
    align-items: center;

    .delete__btn {
      color: #f91155;
    }
  }

  .cart__items {
    display: flex;
    flex-direction: column;
    gap: 20px 0;
  }

  .cart__item {
    display: flex;
    justify-content: space-between;
    gap: 15px;

    img {
      width: 92px;
      height: 92px;
      object-fit: cover;
    }
  }

  .checkbox {
    width: 18px;
    height: 18px;
    margin: auto 0;
  }

  .cart__item-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 0 1 40%;
  }

  .cart__item-actions {
    button {
      color: #005bff;
    }
  }

  .cart__item-price {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .price-now {
      font-size: 22px;
    }

    .price-old {
      text-decoration: line-through;
      font-size: 18px;
      color: #808d9a;
    }

    .price-discount {
      color: #f91155;
    }

    .price-row {
      display: flex;
      gap: 5px;
      align-items: center;
    }
  }

  .content__right {
    display: flex;
    flex-direction: column;
    gap: 35px;
    flex: 0 1 30%;
  }

  .content__order {
    display: flex;
    gap: 10px;
    flex-direction: column;

    button {
      width: 100%;
      border-radius: 12px;
      min-height: 56px;
      min-width: 224px;
      padding: 0 24px;
      align-items: center;
      display: flex;
      justify-content: center;
      background-color: #10c44c;
      color: #fff;
      font-weight: 600;
      transition: background 0.2s ease-out;
    }

    p {
      color: #808d9a;
    }
  }

  .btn__order {
    &:hover {
      background-color: #11b648;
    }
  }

  .your-cart {
    display: flex;
    flex-direction: column;
    gap: 10px 0;

    &__block {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__title {
      font-size: 20px;
      font-weight: 700;
      line-height: 1.4em;
      margin-bottom: 10px;
    }

    &__value {
      display: flex;
      gap: 5px;
    }
  }
`;
