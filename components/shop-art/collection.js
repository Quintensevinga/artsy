import styles from './collection.module.css';
import items from '../../Data/db';

function Collection() {
  return (
    <div className={styles.classicsContainer}>
      {items.map((item) => (
        <div className={styles.classicsBox} key={item.index}>
          <img className={styles.classicsItem} src={item.imageUrl} alt={`Item ${item.index}`} />
          <p className={styles.classicsDescr}>{item.description}</p>
          <p className={styles.classicsPrice}>{item.price}</p>
          <div className={styles.custButton}>
            <a href={`/shop-art/customize-${item.index}`} className={styles.btn}>
              CUSTOMIZE
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Collection;
