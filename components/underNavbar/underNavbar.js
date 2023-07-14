import styles from './underNavbar.module.css'

function UnderNavbar() {
  return (
    <div className={styles.UnderNavbarBar}>
      <h1 className={styles.underNavbarQuote}>EMBRACE THE ARTIST WITHIN.</h1>
      <p className={styles.underQuote}>CHOOSE YOUR WORK & CREATE</p>
    </div>
  )
}

export default UnderNavbar;