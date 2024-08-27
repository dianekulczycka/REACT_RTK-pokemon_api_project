import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IFavourite} from "../../interfaces/IFavourite";

interface IFavouritesSlice {
    favourites: IFavourite[];
}

const initialState: IFavouritesSlice = {
    favourites: []
};

export const favoritesSlice = createSlice({
    name: "favoritesSlice",
    initialState,
    reducers: {
        addFavourite: (state, action: PayloadAction<IFavourite>) => {
            state.favourites.push(action.payload);
            localStorage.setItem("favourites", JSON.stringify(state.favourites));
        },
        revokeFavourites: (state) => {
            state.favourites = [];
            localStorage.removeItem("favourites")
        }
    },
});

export const {
    addFavourite,
    revokeFavourites
} = favoritesSlice.actions;
