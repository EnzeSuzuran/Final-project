import { configureStore } from '@reduxjs/toolkit';
import sneakersReducer from './sheakersSlice';
import teamReducer from './teamSlice';

const store = configureStore({
    reducer: {
        sneakers: sneakersReducer,
        team: teamReducer,
    },
});

export default store;
