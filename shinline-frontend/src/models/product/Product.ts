export type ProductItem = {
  id: string;
  title: string;
  unitPrice: number;
  imageSrc: string;
  imageAlt: string;
  seasonTypes: string[];
  brandSrc: string;
  color: string;
  soldOut: boolean;
  views: number;
};

export type CartItem = {
  quantity: number;
  totalPrice: number;
} & ProductItem;

export type ProductState = {
  data: ProductItem[];
};

export type WishlistState = {
  wishlist: ProductItem[];
};

export type CartState = {
  cart: CartItem[];
};

export const initialProduct: ProductItem = {
  id: '',
  title: '',
  unitPrice: 0,
  imageSrc: '',
  imageAlt: '',
  seasonTypes: [],
  brandSrc: '',
  color: '',
  soldOut: false,
  views: 0,
};
