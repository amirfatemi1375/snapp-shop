"use client";
import Link from "next/link";
import styles from "./ProductCard.module.scss";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import { formatNumber } from "@/utils/seprator";
import useCartStore from "@/store/useCartStore";
import { ProductCardProps } from "@/components/product-card/types";
const ProductCard = ({ name, imageUrl, price, link, id }: ProductCardProps) => {
  const { addToCart, isInCart } = useCartStore();

  const handleAddToCart = () => {
    if (isInCart(id)) return;
    addToCart({ id, name, price, imageUrl, quantity: 1 });
  };
  return (
    <div className={styles.card}>
      <Link href={`product/${link}`}>
        <Image
          src={imageUrl}
          alt={name}
          className={styles.image}
          width={200}
          height={200}
        />
        <div className={styles.info}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.price}>{formatNumber(price)} تومان</p>
        </div>
      </Link>
      <div className={styles.center}>
        <Button onClick={handleAddToCart}>
          {isInCart(id) ? "در سبد هست" : "افزودن به سبد خرید"}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
