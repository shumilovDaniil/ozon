import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    goods: [],
    status: null,
    error: null,
};

export const fetchGoods = createAsyncThunk(
    "goods/fetchGoods",
    async (_, rejectWithValue) => {
        try {
            const response = await fetch("http://localhost:3001/posts");

            if (!response.ok) {
                throw new Error("goods/fetchGoods error");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);

const goodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchGoods.pending]: (state, action) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchGoods.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.goods = action.payload;
        },
        [fetchGoods.reject]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
    },
});

export default goodsSlice.reducer;
