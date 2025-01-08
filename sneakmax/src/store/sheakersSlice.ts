import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Sneakers } from '../types';

export const fetchSneakers = createAsyncThunk('sneakers/fetchSneakers', async () => {
    const response = await fetch('https://api.example.com/sneakers');
    if (!response.ok) {
        throw new Error('Ошибка при загрузке данных');
    }
    return (await response.json()) as Sneakers[];
});

const sneakersSlice = createSlice({
    name: 'sneakers',
    initialState: [] as Sneakers[],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSneakers.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(fetchSneakers.rejected, (state, action) => {
                console.error(action.error.message);
            });
    },
});

export default sneakersSlice.reducer;
