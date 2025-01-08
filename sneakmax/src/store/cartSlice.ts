
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sneakers } from '../types';

interface CartState {
    items: Sneakers[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Sneakers>) => {
            state.items.push(action.payload);
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
