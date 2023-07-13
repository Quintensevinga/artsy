import styles from './firstOrder.module.css'

function FirstOrderDiscount() {
  return (
    <div className={styles.firstOrderBox}>
      <div>
        <h3 className={styles.getDiscount}>
          GET 10% OFF ON YOUR FIRST ORDER
        </h3>
        <p className={styles.getEmail}>
          Sign up for promotions, tailored new arrivals, stock updates and more - straight to your inbox
        </p>
      </div>
      <div>
        <input
          placeholder='Your email adress'
          className={styles.inputField}
        >
        </input>
        <button type='submit' className={styles.signUpBtn}>
          SIGN UP
        </button>
      </div>
    </div>
  )
}

export default FirstOrderDiscount;