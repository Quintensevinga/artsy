import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.imageContainer}>
        <img src="https://bin.snmmd.nl/m/a29y7g0uvwue_san_rectangle_xlarge.png/beeld-de-duckwacht-lr.png" alt="Header Image" className={styles.image} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.quote}>EMBRACE THE ARTIST WITHIN</h1>
        <button className={styles.button}>SHOP NOW</button>
      </div>
    </div>
  );
}

export default Header;



