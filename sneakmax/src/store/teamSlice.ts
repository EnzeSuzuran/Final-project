import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTeam = createAsyncThunk('team/fetchTeam', async () => {
    const response = await axios.get('https://api.mokky.dev/team.json'); 
    return response.data;
});

const teamSlice = createSlice({
    name: 'team',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTeam.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default teamSlice.reducer;
