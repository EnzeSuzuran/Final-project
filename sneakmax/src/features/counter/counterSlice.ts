import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
}

export interface CounterState {
    value: number;
    items: CartItem[];
}

const initialState: CounterState = {
    value: 0,
    items: [],
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);
            state.value += 1;
        },
        removeItem: (state, action: PayloadAction<number>) => {
            const index = state.items.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.items.splice(index, 1);
                state.value -= 1;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.value = 0;
        },
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});


export const { addItem, removeItem, clearCart, increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
