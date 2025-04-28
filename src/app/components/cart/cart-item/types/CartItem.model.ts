export type CartItemProps = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
};
