import styles from './classics.module.css';
import Link from 'next/link';


function Classics() {
  return (
    <div>
      <div className={styles.classicsTitle}>
        <h2>CLASSICS</h2>
      </div>
      <div className={styles.classicsContainer}>
        <div className={styles.classicsBox}>
          <img className={styles.classicsItem} src="https://www.hollywoodreporter.com/wp-content/uploads/2011/05/marilyn_monroe_subway_2011_a_p.jpg?w=2000&h=1126&crop=1" alt="marilyn img" />
          <p className={styles.classicsDescr}>Skirt</p>
          <p className={styles.classicsPrice}>from €23,95</p>
          <div className={styles.custButton}>
            <Link href="/shop-art" className={styles.btn}>
              CUSTOMIZE
            </Link>
          </div>
        </div>
        <div className={styles.classicsBox}>
          <img className={styles.classicsItem} src="https://image-cdn.essentiallysports.com/wp-content/uploads/imago0130091091h.jpg?width=900" alt="ali img" />
          <p className={styles.classicsDescr}>Fly like a butterfly</p> 
          <p className={styles.classicsPrice}>from €23,95</p>
          <div className={styles.custButton}>
            <Link href="/shop-art" className={styles.btn}>
              CUSTOMIZE
            </Link>
          </div>
        </div>
        <div className={styles.classicsBox}>
          <img className={styles.classicsItem} src="https://www.metalorgie.com/grp_tof/1239-photo_Jimi_Hendrix.jpg" alt="jimmy img" />
          <p className={styles.classicsDescr}>Guitar Hero</p>
          <p className={styles.classicsPrice}>from €23,95</p>
          <div className={styles.custButton}>
            <Link href="/shop-art" className={styles.btn}>
              CUSTOMIZE
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Classics;