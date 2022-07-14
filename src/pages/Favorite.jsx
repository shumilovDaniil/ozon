import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Goods from "../components/Goods";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorite, filterFavorite } from "../redux/slices/favoriteSlice";

export default function Favorite() {
  const favorite = useSelector((state) => state.favorite.favorite);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavorite());
  }, []);

  return (
    <Wrapper>
      <h2>
        Избранное <span>{favorite.length}</span>
      </h2>
      <main>
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
      </main>
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
    margin-bottom: 16px;

    span {
      color: #707f8d;
      font-size: 18px;
      height: 20px;
      position: absolute;
      top: 8px;
      right: -12px;
    }
  }

  main {
    display: flex;
  }

  aside {
    min-width: 20%;
    display: flex;
    flex-direction: column;
    gap: 10px;

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
