import Link from 'next/link';
import styles from './navbar.module.css';
import { FiShoppingBag, FiHeart, FiUser } from 'react-icons/fi';

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
            <ul className={styles.dropDownMenu}>
              <li className={styles.dropDownMenuItem}>
                <Link href="/contact">CONTACT</Link>
              </li>
              <li className={styles.dropDownMenuItem}>
                <Link href="/about-us">ABOUT US</Link>
              </li>
              <li className={styles.dropDownMenuItem}>
                <Link href="/shipping">SHIPPING & RETURNS</Link>
              </li>
            </ul>
          </li>
        </ul>

        <div className={styles.logoContainer}>
          <Link href="/" className={`${styles.logo} logo`}>
            ARTSY
          </Link>
        </div>
        <div className={styles.navbarIcons}>
          <Link href="/account" className={styles.iconLink}>
            <FiUser size={20} color="black" />
          </Link>
          <Link href="/wishlist" className={styles.iconLink}>
            <FiHeart size={20} color="black" />
          </Link>
          <Link href="/cart" className={styles.iconLink}>
            <FiShoppingBag size={20} color="black" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
