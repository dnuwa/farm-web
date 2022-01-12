import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find(item => item.ID === action.payload.ID);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({ ...action.payload });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find(item => item.ID === action.payload.ID);
      item.quantity = action.payload.quantity;
    },
    decrementQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item.quantity === 1) {
        const index = state.findIndex(item => item.id === action.payload);
        state.splice(index, 1);
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload);
      state.splice(index, 1);
    },
    clearCart: (state, action) => {
      if (action.type === 'cart/clearCart') {
        state.splice(0, state.length);
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } = cartSlice.actions;
