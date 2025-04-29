"use client";
import Image from "next/image";
import styles from "./productDetail.module.scss";
import { formatNumber } from "@/utils";
import { AddToCartBtn } from "@/components/cart/add-to-cart-button";
import products from "@/data/product.json";
import { ProductPageProps } from "./types/ProductPage.model";

const ProductPage = ({ params }: ProductPageProps) => {
  const product = products.find((product) => product.id === params.id);

  if (!product) {
    return <div>محصول پیدا نشد</div>;
  }

  return (
    <div className={styles.container}>
      <section className={styles.productDetail}>
        <figure className={styles.productImage}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={400}
          />
        </figure>

        <article className={styles.productInfo}>
          <h1 className={styles.productTitle}>{product.name}</h1>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>
            <span>{formatNumber(product.price)} تومان</span>
            <AddToCartBtn product={product} />
          </p>
        </article>
      </section>
    </div>
  );
};

export default ProductPage;
