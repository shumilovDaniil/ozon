import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";
import Orders from "./pages/Orders";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "./redux/slices/goodsSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const goods = useSelector((state) => state.goods.goods);

  useEffect(() => {
    dispatch(fetchGoods());
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
