import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { CartItem, CartState } from '../../../models';

const savedCart = localStorage.getItem('cart');
const parsedCart = savedCart
  ? (JSON.parse(savedCart) as CartState['cart'])
  : [];

const initialState: CartState = {
  cart: parsedCart,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      // payload = newItem
      state.cart.push(action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cart));
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    deleteItem(state, action) {
      // payload = id
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    increaseItemQuantity(state, action: PayloadAction<string>) {
      // payload = id
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItemQuantity(state, action) {
      // payload = id
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
        if (item.quantity === 0) {
          cartSlice.caseReducers.deleteItem(state, action);
        }
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    clearCart(state) {
      state.cart = [];
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export const getCart = (state: RootState) => state.cart.cart;

export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
// 1-cart -> slice name, 2-cart -> cart: []

export const getTotalCartPrice = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id: string) => (state: RootState) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;

export default cartSlice.reducer;
