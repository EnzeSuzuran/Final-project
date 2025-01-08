import { configureStore } from '@reduxjs/toolkit';
import sneakersReducer from '../store/sheakersSlice';
import counterReducer from '../features/counter/counterSlice';
import usersReducer from '../features/users/usersSlice';
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';

const store = configureStore({
    reducer: {
        sneakers: sneakersReducer,
        counter: counterReducer,
        users: usersReducer,
    },
});

// Определяем типы для RootState и AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default store;
