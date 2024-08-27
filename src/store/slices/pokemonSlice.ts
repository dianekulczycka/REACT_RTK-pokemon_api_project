import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from "axios";
import {getAllPokemons} from "../../services/getAllPokemons";
import {IPokemonDetails} from "../../interfaces/IPokemonDetails";
import {IPokemon} from "../../interfaces/IPokemon";
import {getPokemonById} from "../../services/getPokemonById";

interface IPokemonSlice {
    pokemonsPaginated: IPokemon[];
    selectedPokemon: IPokemonDetails;
    searchResults: IPokemon[];
    page: number;
    itemsPerPage: number;
    isLoaded: boolean;
    error: string | null;
}

const initialState: IPokemonSlice = {
    pokemonsPaginated: [],
    selectedPokemon: {
        name: "",
        abilities: [],
        stats: [],
        types: [],
        sprites: {
            front_shiny: ""
        },
        forms: []
    },
    searchResults: [],
    page: 1,
    itemsPerPage: 20,
    isLoaded: false,
    error: null
}

export const loadAllPokemons = createAsyncThunk(
    'pokemon/loadPokemons',
    async (_, thunkAPI) => {
        try {
            const response: IPokemon[] = await getAllPokemons();
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            const error: AxiosError = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const loadPokemonDetails = createAsyncThunk(
    'pokemon/loadPokemonDetails',
    async (pokemonId: number, thunkAPI) => {
        try {
            const response: IPokemonDetails = await getPokemonById(pokemonId);
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            const error: AxiosError = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


export const pokemonSlice = createSlice({
    name: "pokemonSlice",
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        setItemsPerPage(state, action: PayloadAction<number>) {
            state.itemsPerPage = action.payload;
        },
        setSearchResults(state, action: PayloadAction<IPokemon[]>) {
            state.searchResults = action.payload;
        },
        clearSearchResults(state) {
            state.searchResults = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadAllPokemons.fulfilled, (state, action: PayloadAction<IPokemon[]>) => {
                state.pokemonsPaginated = action.payload;
                state.isLoaded = true;
            })
            .addCase(loadAllPokemons.rejected, (state, {error: {message}}) => {
                console.log(`Failed to load pokemons. ${message}`);
                state.isLoaded = false;
            })
            .addCase(loadPokemonDetails.fulfilled, (state, action: PayloadAction<IPokemonDetails>) => {
                state.selectedPokemon = action.payload;
                state.isLoaded = true;
            })
            .addCase(loadPokemonDetails.rejected, (state, {error: {message}}) => {
                console.log(`Failed to load selected pokemon. ${message}`);
                state.isLoaded = false;
            })
    }
});

export const pokemonActions = {
    ...pokemonSlice.actions,
    loadAllPokemons,
    loadPokemonDetails,
};
