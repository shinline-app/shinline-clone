import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { ProductItem as WishlistItem, WishlistState } from '../../../models';

const savedWishlist = localStorage.getItem('wishlist');
const parsedWishlist = savedWishlist
  ? (JSON.parse(savedWishlist) as WishlistState['wishlist'])
  : [];

const initialState: WishlistState = {
  wishlist: parsedWishlist,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    setWishlist(state, action: PayloadAction<WishlistItem>) {
      const index = state.wishlist.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (index > -1) {
        state.wishlist.splice(index, 1);
      } else {
        state.wishlist.push(action.payload);
      }
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },
    removeWishlist(state, action: PayloadAction<string>) {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },
    clearWishlist(state) {
      state.wishlist = [];
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },
  },
});

export const { setWishlist, removeWishlist, clearWishlist } =
  wishlistSlice.actions;

export const getWishlist = (state: RootState) => state.wishlist.wishlist;

export const getWishlistTotalItems = (state: RootState) =>
  state.wishlist.wishlist.length;

export const checkInWishlist = (id: string) => (state: RootState) =>
  state.wishlist.wishlist.find((item: any) => item.id === id);

export default wishlistSlice.reducer;
