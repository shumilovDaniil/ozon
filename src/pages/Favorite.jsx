import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Goods from "../components/Goods/Goods";
import { useSelector } from "react-redux";

export default function Favorite() {
  const goods = useSelector((state) => state.goods.goods);

  return (
    <Wrapper>
      <aside>
        <ul>
          <li>
            <Link to="/">Категория</Link>
          </li>
          <li>
            <Link to="/">Одежда</Link>
          </li>
          <li>
            <Link to="/">Обувь</Link>
          </li>
          <li>
            <Link to="/">Бытовая техника</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Наличие товаров</Link>
          </li>
          <li>
            <input
              className="checkbox"
              type="checkbox"
              id="goods__no_matter"
            ></input>
            <label htmlFor="goods__no_matter">Неважно!</label>
          </li>
          <li>
            <input
              className="checkbox"
              type="checkbox"
              id="goods__in_stock"
            ></input>
            <label htmlFor="goods__in_stock">Выбрать всё</label>
          </li>
          <li>
            <input
              className="checkbox"
              type="checkbox"
              id="goods__out_stock"
            ></input>
            <label htmlFor="goods__out_stock">Выбрать всё</label>
          </li>
        </ul>
      </aside>
      <Goods goods={goods} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;

  aside {
    min-width: 20%;

    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    li {
      display: flex;
      align-items: center;
      gap: 0 8px;
    }

    .checkbox {
      width: 18px;
      height: 18px;
    }
  }
`;
