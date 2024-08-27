import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {IForm} from "../../interfaces/IForm";
import {getPokemonFormById} from "../../services/getPokemonFormById";

interface IFormSlice {
    form: IForm | null;
    error: string | null;
}

const initialState: IFormSlice = {
    form: null,
    error: null,
};

export const loadForm = createAsyncThunk(
    'form/loadForm',
    async (formId: number, thunkAPI) => {
        try {
            const response: IForm = await getPokemonFormById(formId);
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            const error: AxiosError = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const formSlice = createSlice({
    name: 'formSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadForm.fulfilled, (state, action: PayloadAction<IForm>) => {
                state.form = action.payload;
            })
            .addCase(loadForm.rejected, (state, {error: {message}}) => {
                console.log(`Failed to load pokemon's form. ${message}`);
            });
    }
});

export const formActions = {
    ...formSlice.actions,
    loadForm
};
