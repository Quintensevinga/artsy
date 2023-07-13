import Link from 'next/link';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link href="/">HOME</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/shop-art">SHOP ART</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/frames">FRAMES</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/more">MORE</Link>
          </li>
        </ul>
        <div className={styles.logoContainer}>
          <Link href="/" className={`${styles.logo} logo`}>
            ARTSY
          </Link>
        </div>
        <div className={styles.navbarIcons}>
          <Link href="/cart" className={styles.iconLink}>
            <img src="/shopping-bag.svg" alt="Shopping Bag" />
          </Link>
          <Link href="/notifications" className={styles.iconLink}>
            <img src="/bell.svg" alt="Notifications" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
