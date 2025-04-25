import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>© 2025 SnappShop. تمامی حقوق محفوظ است.</p>
        <div className={styles.socialLinks}>
          <a href="https://www.instagram.com" className={styles.socialIcon}>اینستاگرام</a>
          <a href="https://www.telegram.me" className={styles.socialIcon}>تلگرام</a>
        </div>
      </div>
    </footer>
  );
}