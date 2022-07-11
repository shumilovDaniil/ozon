import React from "react";
import { useSelector } from "react-redux";
import Goods from "./../components/Goods/Goods";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  return <Goods goods={cart} />;
}
