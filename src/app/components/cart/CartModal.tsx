"use client";
import styles from "./Cart.module.scss";
import {useCartStore} from "@/store";
import { formatNumber } from "@/utils/seprator";
import { Button } from "@/components/ui/button";
import {useOutsideClick} from "@/hooks";
import CartItem from "./cart-item/CartItem";

const CartModal = () => {
  const {
    cartItems,
    toggleCartModal,
    removeFromCart,
    updateQuantity,
    openCartModal,
  } = useCartStore();
  const modalRef = useOutsideClick(toggleCartModal);

  if (!openCartModal) return null;

  const handleClose = () => toggleCartModal();

  return (
    <section className={styles.modal}>
      <div ref={modalRef} className={styles.modalContent}>
        <header>
          <h2 className={styles.modalTitle}>سبد خرید</h2>
        </header>

        {cartItems.length === 0 ? (
          <p className={styles.emptyMessage}>سبد خرید شما خالی است</p>
        ) : (
          <ul className={styles.cartItems}>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity ?? 1}
                imageUrl={item.imageUrl}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>
        )}

        <footer className={styles.total}>
          {cartItems.length ? (
            <>
              <h3>جمع سبد خرید:</h3>
              <p>
                {formatNumber(
                  cartItems.reduce(
                    (total, item) => total + item.price * (item.quantity ?? 0),
                    0
                  )
                )}{" "}
                تومان
              </p>
            </>
          ) : null}
        </footer>

        <div className={styles.closeButton}>
          <Button onClick={handleClose}>بستن</Button>
        </div>
      </div>
    </section>
  );
};

export default CartModal;
