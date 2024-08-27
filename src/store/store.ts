import {configureStore} from "@reduxjs/toolkit";
import {pokemonSlice} from "./slices/pokemonSlice";
import {favoritesSlice} from "./slices/favouritesSlice";
import {formSlice} from "./slices/formSlice";

export const store = configureStore({
    reducer: {
        pokemons: pokemonSlice.reducer,
        favourites: favoritesSlice.reducer,
        forms: formSlice.reducer
    },
});
