import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/state/cartSlice.ts';
import useReducer from '../features/user/userSlice.ts';
import wishlistSlice from '../features/account/state/wishlistSlice.ts';
const store = configureStore({
  reducer: {
    user: useReducer,
    cart: cartReducer,
    wishlist: wishlistSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
