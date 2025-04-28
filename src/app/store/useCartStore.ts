import { create } from "zustand";
import { ICartState } from "@/store/types";
const useCartStore = create<ICartState>((set, get) => ({
  cartItems: [],
  openCartModal: false,
  addToCart: (product) =>
    set((state) => {
      const exists = state.cartItems.some((item) => item.id === product.id);
      if (exists) return state;
      return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id.toString() !== id),
    })),

  updateQuantity: (id, quantity) => {
    if (quantity === 0) {
      return set((state) => ({
        cartItems: state.cartItems.filter((item) => item.id.toString() !== id),
      }));
    }
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id.toString() === id ? { ...item, quantity } : item
      ),
    }));
  },
  isInCart: (id) => get().cartItems.some((item) => item.id.toString() === id),
  toggleCartModal: () =>
    set((state) => ({ openCartModal: !state.openCartModal })),
}));

export default useCartStore;
