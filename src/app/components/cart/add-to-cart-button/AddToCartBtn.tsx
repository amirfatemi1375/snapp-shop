"use client";

import {useCartStore} from "@/store";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/types";

const AddToCartButton = ({ product }: { product: IProduct }) => {
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
