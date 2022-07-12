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
            <button className="delete__btn">Удалить выбранные</button>
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
                <span>75 товаров</span>
                <span>15,24 кг</span>
              </div>
            </div>

            <div className="your-cart__block">
              <span>Товары (75)</span>
              <span>164 959 ₽</span>
            </div>
            <div className="your-cart__block">
              <div>
                <span>Скидка</span>
                <span>Подробнее</span>
              </div>
              <span>- 87 371 ₽</span>
            </div>

            <div className="your-cart__block">
              <h3 className="your-cart__title">Общая стоимость</h3>
              <span>77 588 ₽</span>
            </div>
            <div className="your-cart__block">
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
  }

  .cart__item {
    display: flex;
    gap: 20px;

    img {
      width: 92px;
      height: 92px;
      object-fit: cover;
    }
  }

  .cart__item-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .cart__item-actions {
    button {
      color: #005bff;
    }
  }

  .content__right {
    display: flex;
    flex-direction: column;
    gap: 35px;
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
