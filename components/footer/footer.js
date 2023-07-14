import Link from 'next/link';
import styles from './footer.module.css';

function Footer() {
  return (
    <div>
      <div className={styles.footerBox}>
        <div className="contactContainer">
          <div className="name">
            <h3>ARTSY</h3>
          </div>
          <div className={styles.email}>
            <p>info@artsy.com</p>
          </div>
          <div className="socials">
            <p>icon icon icon</p>
          </div>
        </div>
        <div className={styles.aboutUsBox}>
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed justo ac nisi consequat aliquet.
            Sed a nunc in nisl bibendum laoreet. Mauris hendrerit, lectus in efficitur aliquet, felis enim lobortis dui, id dapibus diam nisi eu lorem. In at ultricies dui. Donec at tellus fringilla, tristique ligula ac, efficitur dui. Integer consectetur turpis vitae sem sollicitudin lobortis. Nam lacinia augue elit, non rhoncus elit facilisis vitae. Aliquam erat volutpat. Maecenas malesuada nibh quis fermentum fringilla. Sed dictum justo vitae arcu facilisis, at feugiat justo feugiat.
          </p>

        </div>
        <div>
          <ul className={styles.footerList}>
            <li>
              <h3>Customer Service</h3>
            </li>
            <li className={styles.footerListItem}>
              <Link href="/my-account">My account</Link>
            </li>
            <li className={styles.footerListItem}>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className={styles.footerListItem}>
              <Link href="/shipping">Shipping & Returns</Link>
            </li>
            <li className={styles.footerListItem}>
              <Link href="/FAQ">FAQ'S</Link>
            </li>
            <li className={styles.footerListItem}>
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>COPYRIGHT © 2023 Artsy, All Rights Reserved</p>
        <p>icon icon icon icon icon icon icon icon</p>
      </div>
        
    </div>

  )
}

export default Footer;