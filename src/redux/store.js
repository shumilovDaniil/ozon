import { configureStore } from "@reduxjs/toolkit";
import goodsSlice from "./slices/goodsSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    goods: goodsSlice,
    cart: cartSlice,
  },
});

export default store;
