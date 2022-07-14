import React from "react";
import styled from "styled-components";
import Skeleton from "./GoodsItem/Skeleton";
import { useSelector } from "react-redux";
import GoodsItem from "./GoodsItem";

export default function Goods({ goods }) {
  const status = useSelector(state => state.goods.status);
  console.log(status);
  return (
    <GoodsList>
      {status === "loading" ? [...new Array(12)].map((i, idx) => <Skeleton key={`${i}_${idx}`} {...i} />)
        : goods.map(i => <GoodsItem key={i.id} {...i} />)}
    </GoodsList>
  );
}

const GoodsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
