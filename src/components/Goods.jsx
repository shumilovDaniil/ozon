import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import GoodsItem from "./GoodsItem";
import Skeleton from "./GoodsItem/Skeleton";

export default function Goods({ goods }) {
    const status = useSelector((state) => state.goods.status);

    const [goodsShown, setGoodsShown] = useState(goods);
    const [goodsShownValue, setGoodsShownValue] = useState(12);

    const showMore = () => {
        if (goods) {
            setGoodsShownValue((prev) => prev + 12);
        }
    };

    useEffect(() => {
        const newArr = goods.slice([0], [goodsShownValue]);
        setGoodsShown(() => [...newArr]);
    }, [goods, goodsShownValue]);

    return (
        <GoodsWrapper>
            <GoodsList>
                {status === "loading"
                    ? [...new Array(12)].map((i, idx) => (
                          <Skeleton key={`${i}_${idx}`} {...i} />
                      ))
                    : goodsShown.map((i) => (
                          <GoodsItem key={i.id} {...i} array={goods} />
                      ))}
            </GoodsList>

            {goods.length !== goodsShown.length && (
                <ShowMoreBlock>
                    <ButtonWhite onClick={() => showMore()}>
                        Show More
                    </ButtonWhite>
                </ShowMoreBlock>
            )}
        </GoodsWrapper>
    );
}

const GoodsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const GoodsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    row-gap: 40px;
`;

const ShowMoreBlock = styled.div`
    display: flex;
    margin: 0 auto;
`;

const ButtonWhite = styled.button`
    background-color: #fff;
    padding: 10px 20px;
    color: #005bff;
    border: 1px solid #005bff;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0 5px;
    font-size: 16px;
    border-radius: 4px;
`;
