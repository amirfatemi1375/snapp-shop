"use client";

import useCartStore from "@/store/useCartStore";
import Button from "../ui/button/Button";
import { Product } from "@/types/product";

const AddToCartButton = ({ product }: { product: Product }) => {
  const { addToCart, isInCart } = useCartStore();

  const handleClick = () => {
    if (!isInCart(product.id)) {
      addToCart({ ...product, quantity: 1 });
    }
  };

  return (
    <Button onClick={handleClick}>
      {isInCart(product.id) ? "در سبد هست" : "افزودن به سبد خرید"}
    </Button>
  );
};

export default AddToCartButton;
