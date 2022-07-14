import React, { useEffect } from "react";
import CarouselBlock from "../components/CarouselBlock";
import Goods from "../components/Goods";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "../redux/slices/goodsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const goods = useSelector((state) => state.goods.goods);

  useEffect(() => {
    dispatch(fetchGoods());
  }, []);

  return (
    <>
      <CarouselBlock />
      <Goods goods={goods} />
    </>
  );
}
