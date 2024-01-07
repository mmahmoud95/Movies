import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: { favorites: [] },
    reducers: {
        addToFavorites(state, action) {
            state.favorites.push(action.payload);
        },
        removeFavorites(state, action) {
            state.favorites = state.favorites.filter(
                (movie) => movie.id !== action.payload.id
            );
        },
    },
});

export const { addToFavorites, removeFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
