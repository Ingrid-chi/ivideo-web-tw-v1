import { promotionsData } from './promotionsData';
import styles from './Promotions.module.scss';

import Button from '../common/Button';

const Promotions = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className={styles.promotionsWrapper}>
      <h4 className={styles.promotionsTitle}>全球購物 優惠不間斷</h4>

      <div className={styles.promotionsContainer}>
        {promotionsData.map((item) => (
          <div key={item.id} className={styles.promotionItem}>
            <div className={styles.imagesWrapper}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.image}
                  src={item.image}
                  alt={item.content}
                />
              </div>
              <div className={styles.overlay}>
                <Button type='primarySecondary' onClick={handleClick}>
                  了解更多
                </Button>
              </div>
            </div>

            <div className={styles.contentWrapper}>
              <div className={styles.content}>{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;
