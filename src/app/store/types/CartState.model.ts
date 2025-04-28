import { IProduct } from "@/types/";
export interface ICartState {
  cartItems: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  isInCart: (id: string) => boolean;
  openCartModal: boolean;
  toggleCartModal: () => void;
}
