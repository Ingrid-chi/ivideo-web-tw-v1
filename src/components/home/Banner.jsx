import { useRef, useEffect, useState } from 'react';
import { bannerData } from './bannerData';
import clsx from 'clsx';
import styles from './Banner.module.scss';

import ButtonArrow from '../common/ButtonArrow';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  // const [buttonSize, setButtonSize] = useState({
  //   width: '32px',
  //   height: '32px',
  // });
  // 防止重複觸發動畫
  const [isAnimating, setIsAnimating] = useState(false);

  const bannerRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (bannerRef.current) {
        const width = bannerRef.current.getBoundingClientRect().width;
        if (width > 0) setItemWidth(width);
      }
    };
    const timeout = setTimeout(updateWidth, 100);
    window.addEventListener('resize', updateWidth);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const goToPre = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (currentIndex === 0) {
      setCurrentIndex(-1);
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(bannerData.length - 1);
        setVisibleIndex(bannerData.length - 1);
        setTimeout(() => {
          setTransition(true);
          setIsAnimating(false);
        }, 50);
      }, 500);
    } else {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setVisibleIndex(newIndex);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (currentIndex === bannerData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(0);
        setVisibleIndex(0);
        setTimeout(() => {
          setTransition(true);
          setIsAnimating(false);
        }, 50);
      }, 500);
    } else {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setVisibleIndex(newIndex);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setCurrentIndex(index);
    setVisibleIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setButtonSize(
  //       window.innerWidth <= 768
  //         ? { width: '24px', height: '24px' }
  //         : { width: '32px', height: '32px' }
  //     );
  //   };
  //   handleResize();
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // 觸控滑動處理
  useEffect(() => {
    let startX = 0;
    let isTouching = false;

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        startX = e.touches[0].clientX;
        isTouching = true;
      }
    };

    const handleTouchEnd = (e) => {
      if (!isTouching) return;
      const endX = e.changedTouches[0].clientX;
      const deltaX = endX - startX;

      if (Math.abs(deltaX) > 50) {
        deltaX < 0 ? goToNext() : goToPre();
      }

      isTouching = false;
    };

    const content = bannerRef.current?.parentElement;
    if (content) {
      content.addEventListener('touchstart', handleTouchStart, {
        passive: true,
      });
      content.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (content) {
        content.removeEventListener('touchstart', handleTouchStart);
        content.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [currentIndex, isAnimating]);

  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.bannerBackground}>
        <div className={styles.bannerOuter}>
          <div className={styles.arrowLeftContent}>
            <ButtonArrow direction='left' size='lg' onClick={goToPre} />
            {/* <ButtonArrow
              onClick={goToPre}
              width={buttonSize.width}
              height={buttonSize.height}
              className={styles.arrowLeft}
              direction='left'
            /> */}
          </div>

          <div className={styles.bannerCarousel}>
            <div className={styles.bannerContent}>
              <div
                className={styles.bannerTrack}
                style={{
                  transform: itemWidth
                    ? `translateX(-${(currentIndex + 1) * itemWidth}px)`
                    : 'none',
                  transition: transition
                    ? 'transform 0.5s ease-in-out'
                    : 'none',
                }}
              >
                {/* clone 最後一張 */}
                <div className={styles.bannerItem}>
                  <img
                    src={bannerData[bannerData.length - 1].image}
                    alt='clone-last'
                    className={styles.bannerImg}
                  />
                </div>

                {/* 真實圖片，ref 指向第一張 */}
                {bannerData.map((banner, index) => (
                  <div
                    key={index}
                    className={clsx(styles.bannerItem, {
                      [styles.activeItem]: index === visibleIndex,
                    })}
                    ref={index === 0 ? bannerRef : null}
                  >
                    <img
                      src={banner.image}
                      alt={banner.alt}
                      className={styles.bannerImg}
                    />
                  </div>
                ))}

                {/* clone 第一張 */}
                <div className={styles.bannerItem}>
                  <img
                    src={bannerData[0].image}
                    alt='clone-first'
                    className={styles.bannerImg}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.arrowRightContent}>
            <ButtonArrow direction='right' size='lg' onClick={goToNext} />
            {/* <ButtonArrow
              onClick={goToNext}
              width={buttonSize.width}
              height={buttonSize.height}
              className={styles.arrowRight}
              direction='right'
            /> */}
          </div>
        </div>
      </div>

      <div className={styles.paginationDots}>
        {bannerData.map((_, index) => (
          <div key={index} className={styles.dotWrapper}>
            <button
              onClick={() => goToSlide(index)}
              className={clsx(styles.dot, {
                [styles.activeDot]: index === visibleIndex,
              })}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
