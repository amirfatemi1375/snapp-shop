"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
import {useCartStore} from "@/store";
import { useState } from "react";

export default function Header() {
  const { cartItems, toggleCartModal } = useCartStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
          <Link href="/" className={styles.logo}>
            SnappShop
          </Link>
          <Link href="/products" className={styles.navItem}>
            محصولات
          </Link>
        </nav>

        <div className={styles.cartContainer} onClick={toggleCartModal}>
          <span>سبد خرید</span>
          {cartItems.length > 0 && (
            <div className={styles.cartCount}>{cartItems.length}</div>
          )}
        </div>
        <div className={styles.hamburger} onClick={handleMenuToggle}>
          <div
            className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}
          ></div>
          <div
            className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}
          ></div>
          <div
            className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}
          ></div>
        </div>
      </div>
    </header>
  );
}
