import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./slices/moviesFavs";

//create our store
export const store = configureStore({
    reducer: {
        // favorite: favoriteReducer,
        favorites: favoritesReducer,
        // counterFavorites: counterFavorReducer,
    },
});
