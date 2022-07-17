import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  status: null,
  error: null
};

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, rejectWithValue) => {
    try {
      const response = await fetch("http://localhost:3001/cart");

      if (!response.ok) {
        throw new Error("cart/fetchCart error");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteFromCart = createAsyncThunk(
  "cart/deleteFromCart",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`http://localhost:3001/cart/${id}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        throw new Error("cart/deleteFromCart error");
      }
      dispatch(removeFromCart({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (item, rejectWithValue, dispatch) => {
    try {
      const response = await fetch(`http://localhost:3001/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item)
      });

      if (!response.ok) {
        throw new Error("cart/addToCart error");
      }

      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeFromCart(state, { payload }) {
      state.cart = state.cart.filter((i) => i.id !== payload.id);
    }
  },
  extraReducers: {
    [fetchCart.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchCart.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.cart = action.payload;
    },
    [fetchCart.reject]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    }
  }
});

export default cartSlice.reducer;
export const { removeFromCart } = cartSlice.actions;
