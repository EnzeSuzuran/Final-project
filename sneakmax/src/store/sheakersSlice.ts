import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSneakers = createAsyncThunk('sneakers/fetchSneakers', async () => {
    const response = await axios.get('https://api.mokky.dev/sneakers.json');
    return response.data;
});

const sneakersSlice = createSlice({
    name: 'sneakers',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSneakers.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default sneakersSlice.reducer;
