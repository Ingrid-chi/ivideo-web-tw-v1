import { useEffect, useState } from 'react';
import { newsTickerData } from './newsTickerData';
import styles from './NewsTicker.module.scss';

const NewsTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  const modifiedNewsData = [
    newsTickerData[newsTickerData.length - 1],
    ...newsTickerData,
    newsTickerData[0],
  ];

  const goToNext = () => {
    if (currentIndex === newsTickerData.length - 1) {
      setCurrentIndex(currentIndex + 1); // 移動到clone的第一張

      setTimeout(() => {
        setTransition(false); // 關閉過渡效果
        setCurrentIndex(0); // 立即切換回第一張

        // 恢復過渡效果
        setTimeout(() => {
          setTransition(true);
        }, 50);
      }, 500); // 與過渡時間一樣
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // 使用 useEffect 設定輪播計時器
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.newsTicker}>
      <div
        className={styles.tickerWrapper}
        style={{
          transform: `translateY(-${currentIndex * 100}%)`,
          transition: transition ? 'transform 0.3s ease-in-out' : 'none',
        }}
      >
        {modifiedNewsData.map((item, index) => (
          <div className={styles.tickerContent} key={index}>
            <div className={styles.tickerItem}>{item.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
