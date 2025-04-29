"use client";
import styles from "./CartItem.module.scss";
import { formatNumber } from "@/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CartItemProps } from "@/components/cart/cart-item/models";
const CartItem = ({
  id,
  name,
  price,
  quantity,
  imageUrl,
  updateQuantity,
  removeFromCart,
}: CartItemProps) => {
  return (
    <article className={styles.cartItem}>
      <div className={styles.itemDetails}>
        <Image
          src={imageUrl}
          alt={name}
          className={styles.itemImage}
          width="200"
          height="200"
        />
        <div className={styles.itemInfo}>
          <h3>{name}</h3>
          <p>{formatNumber(price)} تومان</p>
        </div>
      </div>

      <div className={styles.quantityControls}>
        <Button
          className={styles.quantityButton}
          onClick={() => updateQuantity(id, quantity - 1)}
        >
          -
        </Button>
        <span>{quantity}</span>
        <Button
          className={styles.quantityButton}
          onClick={() => updateQuantity(id, quantity + 1)}
        >
          +
        </Button>
      </div>

      <Button
        className={styles.removeButton}
        onClick={() => removeFromCart(id)}
        aria-label="Remove from cart"
      >
        حذف
      </Button>
    </article>
  );
};

export default CartItem;
