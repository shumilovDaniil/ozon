import { configureStore } from "@reduxjs/toolkit";
import goodsSlice from "./slices/goodsSlice";
import cartSlice from "./slices/cartSlice";
import favoriteSlice from "./slices/favoriteSlice";

const store = configureStore({
  reducer: {
    goods: goodsSlice,
    cart: cartSlice,
    favorite: favoriteSlice,
  },
});

export default store;
