import styles from './customization.module.css';
import { useRouter } from 'next/router';
import items from '../../Data/db';

function Customization() {
  const router = useRouter();
  const { index } = router.query;

  const item = items.find((item) => item.index === parseInt(index));
  if (!item) {
    return <div>Loading...</div>; 
  }

  const imageFolder = '/basketballs'; 

  const images = Array.from({ length: 15 }, (_, index) => `${imageFolder}/basketball${index + 1}.png`);

  return (
    <div className={styles.customizeBox}>
      <div>
        <img src={item.imageUrl} alt={`Item ${index}`} />
        <div className={styles.imageScrollBox}>
          {images.map((image, index) => (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              key={index}
              className={styles.imageItem}
              src={image}
              alt={`Image ${index}`}
            />
          ))}
        </div>
      </div>
      <div className={styles.orderBox}>
        <h2>{item.description}</h2>
        <p>{item.price}</p>
        <div>
          <div className={styles.imageRow}>
            <img
              className={styles.sizeItem}
              src={item.imageUrl}
              alt={`Image 1`}
            />
            <img
              className={styles.sizeItem}
              src={item.imageUrl}
              alt={`Image 2`}
            />
          </div>
          <div className={styles.imageRow}>
            <img
              className={styles.sizeItem}
              src={item.imageUrl}
              alt={`Image 3`}
            />
            <img
              className={styles.sizeItem}
              src={item.imageUrl}
              alt={`Image 4`}
            />
          </div>
          <button className={styles.addToCart}>ADD TO CART</button>
          <button className={styles.addWishlist}>WISHLIST</button>
        </div>
        

      </div>
    </div>
  );
}

export default Customization;
