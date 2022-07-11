import React from "react";
import styled from "styled-components";
import GoodsItem from "./GoodsItem";

export default function Goods({ goods }) {
  return (
    <GoodsList>
      {goods.map((i) => {
        return <GoodsItem key={i.id} {...i} />;
      })}
    </GoodsList>
  );
}

const GoodsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
