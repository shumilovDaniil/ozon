import React from "react";
import { useSelector } from "react-redux";
import Goods from "./../components/Goods/Goods";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Wrapper>
      <h2>
        Корзина <span>44</span>
      </h2>
      <div className="content">
        <div className="content__left">
          <div className="actions__top">
            <input type="checkbox" id="check_all"></input>
            <label for="check_all">Выбрать всё</label>
            <button>Удалить выбранные</button>
          </div>
          <div className="cart__items">
            <div className="cart__item">
              <input type="checkbox" name="" id="" />
              <img
                src="https://cdn1.ozone.ru/s3/multimedia-n/wc100/6247837487.jpg"
                alt=""
              />
              <div className="cart__item-info">
                <h4>
                  Беспроводные наушники Air Pro 9 TWS Сенсорные с микрофоном /
                  Для IPhone / Android. Гарнитура. / Белый / Bluetooth 5.0
                </h4>
                <span>цвет белый, 80 гр</span>
                <span className="brand">Nezzah</span>
                <strong>В рассрочку по 110 ₽ / мес</strong>
                <div className="cart__item-actions">
                  <button>В избранное</button>
                  <button>Удалить</button>
                </div>
              </div>

              <div className="cart__item-price">
                <strong>43 560 ₽</strong>
                <div>
                  98 010 ₽<span>Скидка 54 450 ₽</span>
                </div>
                <strong>39 534 ₽ с Ozon Счётом</strong>
              </div>

              <div className="select">
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>
                <p>666 ₽ / шт.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content__right">
          <button>Перейти к оформлению</button>
          <p>
            Доступные способы и время доставки можно выбрать при оформлении
            заказа
          </p>

          <div className="your-cart">
            <div className="your-cart__header">
              <h3>Ваша корзина</h3>
              <div>
                <span>75 товаров</span>
                <span>15,24 кг</span>
              </div>
            </div>

            <div>
              <span>Товары (75)</span>
              <span>164 959 ₽</span>
            </div>
            <div>
              <div>
                <span>Скидка</span>
                <span>Подробнее</span>
              </div>
              <span>- 87 371 ₽</span>
            </div>

            <div>
              <span>Общая стоимость</span>
              <span>77 588 ₽</span>
            </div>
            <div>
              <span>
                При оплате <Link to="/">Ozon Счётом</Link>
              </span>
              <span>72 273 ₽</span>
            </div>
          </div>
        </div>
      </div>

      <Goods goods={cart} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f2f2f2;

  h2 {
    font-size: 30px;
    font-weight: 700;
    padding: 7px 0;

    span {
      color: #707f8d;
      font-size: 15px;
      height: 20px;
      margin: 0 0 12px 2px;
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
  }

  .actions__top {
    padding: 10px 0;
  }

  .cart__items {
    /* display: flex; */
  }

  .cart__item {
    display: flex;
    gap: 10px;
  }

  .content__right {
  }
`;
