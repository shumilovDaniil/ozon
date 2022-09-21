import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorite: [],
    status: null,
    error: null,
};

export const fetchFavorite = createAsyncThunk(
    "favorite/fetchFavorite",
    async (_, rejectWithValue) => {
        try {
            const response = await fetch("http://localhost:3001/favorite");

            if (!response.ok) {
                throw new Error("Server error");
            }

            const data = await response.json();
            return data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const filterFavorite = createAsyncThunk(
    "favorite/filterFavorite",
    async (type, { rejectWithValue, dispatch }) => {
        try {
            if (type === "all") {
                dispatch(fetchFavorite());
            } else {
                const response = await fetch(
                    `http://localhost:3001/favorite/?stock=${type}`
                );

                if (!response.ok) {
                    throw new Error("filterFavorite error");
                }

                const data = await response.json();
                dispatch(onFilterFavorite(data));
                return data;
            }
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const addToFavorite = createAsyncThunk(
    "favorite/addToFavorite",
    async (item, { rejectWithValue, dispatch }) => {
        try {
            const response = await fetch("http://localhost:3001/favorite", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item),
            });

            if (!response.ok) {
                throw new Error("favorite/addToFavorite error");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            rejectWithValue(error.message);
        }
    }
);

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        onFilterFavorite(state, { payload }) {
            state.favorite = payload;
        },
    },
    extraReducers: {
        [fetchFavorite.pending]: (state, action) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchFavorite.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.favorite = action.payload;
        },
        [fetchFavorite.reject]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
    },
});

export default favoriteSlice.reducer;
export const { onFilterFavorite } = favoriteSlice.actions;
