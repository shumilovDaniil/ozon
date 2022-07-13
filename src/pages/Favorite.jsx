import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Goods from "../components/Goods/Goods";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchFavorite } from "../redux/slices/favoriteSlice";
import { filterFavorite } from "../redux/slices/favoriteSlice";

export default function Favorite() {
  const favorite = useSelector((state) => state.favorite.favorite);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavorite());
  }, []);

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
        </ul>
        <div>
          <input
            className="checkbox"
            type="radio"
            id="goods__no_matter"
            defaultChecked
            name="stock"
            onClick={() => dispatch(filterFavorite("all"))}
          ></input>
          <label htmlFor="goods__no_matter">Неважно</label>
        </div>
        <div>
          <input
            className="checkbox"
            type="radio"
            id="goods__in_stock"
            name="stock"
            onClick={() => dispatch(filterFavorite(true))}
          ></input>
          <label htmlFor="goods__in_stock">В наличии</label>
        </div>
        <div>
          <input
            className="checkbox"
            type="radio"
            id="goods__out_stock"
            name="stock"
            onClick={() => dispatch(filterFavorite(false))}
          ></input>
          <label htmlFor="goods__out_stock">Не в наличии</label>
        </div>
      </aside>
      <Goods goods={favorite} />
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
