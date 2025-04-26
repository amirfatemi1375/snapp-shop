"use client";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "./Layout.module.scss";
import CartModal from "@/components/cart/CartModal";
type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <CartModal />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
