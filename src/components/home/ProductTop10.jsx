import { useEffect, useRef, useState } from 'react';
import { productData } from './productTop10Data';
import clsx from 'clsx';
import styles from './ProductTop10.module.scss';

import ButtonArrow from '../common/ButtonArrow';

const ProductTop10 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const productListRef = useRef(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const touchMoveX = useRef(0);
  const initialOffsetApplied = useRef(false);

  const getCardDimensions = () => {
    let cardWidth = 270;
    let cardMargin = 32;
    if (window.innerWidth <= 768) {
      cardWidth = 212;
      cardMargin = 24;
    }
    if (window.innerWidth <= 375) {
      cardWidth = 144;
      cardMargin = 20;
    }
    return { cardWidth, cardMargin };
  };

  const getVisibleCards = () => {
    if (window.innerWidth <= 375) return 2;
    if (window.innerWidth <= 768) return 3;
    return 4;
  };

  const getLeftPadding = (
    cardWidth,
    cardMargin,
    visibleCards,
    containerWidth
  ) => {
    if (visibleCards < 4) {
      // 手機和平板：靠左顯示，左邊預留 24px 間距
      return 24;
    }
    const visibleWidth = visibleCards * (cardWidth + cardMargin) - cardMargin;
    return (containerWidth - visibleWidth) / 2;
  };

  useEffect(() => {
    if (
      !initialOffsetApplied.current &&
      productListRef.current &&
      productData?.length
    ) {
      const { cardWidth, cardMargin } = getCardDimensions();
      const containerWidth = productListRef.current.offsetWidth;
      const visibleCards = getVisibleCards();
      const leftPadding = getLeftPadding(
        cardWidth,
        cardMargin,
        visibleCards,
        containerWidth
      );

      setTranslateX(leftPadding);
      initialOffsetApplied.current = true;
    }
  }, [productData]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);

      const { cardWidth, cardMargin } = getCardDimensions();
      const containerWidth = productListRef.current?.offsetWidth || 0;
      const visibleCards = getVisibleCards();
      const leftPadding = getLeftPadding(
        cardWidth,
        cardMargin,
        visibleCards,
        containerWidth
      );

      setTranslateX(leftPadding - prevIndex * (cardWidth + cardMargin));
    }
  };

  const handleNext = () => {
    if (currentIndex < productData.length - getVisibleCards()) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);

      const { cardWidth, cardMargin } = getCardDimensions();
      const containerWidth = productListRef.current?.offsetWidth || 0;
      const visibleCards = getVisibleCards();
      const leftPadding = getLeftPadding(
        cardWidth,
        cardMargin,
        visibleCards,
        containerWidth
      );

      setTranslateX(leftPadding - nextIndex * (cardWidth + cardMargin));
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchMoveX.current = 0;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    const deltaX = touchEndX.current - touchStartX.current;
    touchMoveX.current = deltaX;

    const { cardWidth, cardMargin } = getCardDimensions();
    const containerWidth = productListRef.current?.offsetWidth || 0;
    const visibleCards = getVisibleCards();
    const leftPadding = getLeftPadding(
      cardWidth,
      cardMargin,
      visibleCards,
      containerWidth
    );
    const baseTranslateX =
      leftPadding - currentIndex * (cardWidth + cardMargin);

    let dampedDeltaX = deltaX;
    const maxIndex = (productData?.length || 0) - visibleCards;

    if (currentIndex === 0 && deltaX > 0) dampedDeltaX = deltaX * 0.3;
    else if (currentIndex === maxIndex && deltaX < 0)
      dampedDeltaX = deltaX * 0.3;

    setTranslateX(baseTranslateX + dampedDeltaX);
  };

  const handleTouchEnd = () => {
    const { cardWidth, cardMargin } = getCardDimensions();
    const totalWidth = cardWidth + cardMargin;
    const movementThreshold = totalWidth / 3;

    const containerWidth = productListRef.current?.offsetWidth || 0;
    const visibleCards = getVisibleCards();
    const leftPadding = getLeftPadding(
      cardWidth,
      cardMargin,
      visibleCards,
      containerWidth
    );

    if (Math.abs(touchMoveX.current) > movementThreshold) {
      if (
        touchMoveX.current < 0 &&
        currentIndex < productData.length - visibleCards
      ) {
        setCurrentIndex(currentIndex + 1);
      } else if (touchMoveX.current > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }

    const newTranslateX = leftPadding - currentIndex * (cardWidth + cardMargin);
    setTranslateX(newTranslateX);
  };

  useEffect(() => {
    const handleResize = () => {
      const { cardWidth, cardMargin } = getCardDimensions();
      const containerWidth = productListRef.current?.offsetWidth || 0;
      const visibleCards = getVisibleCards();
      const leftPadding = getLeftPadding(
        cardWidth,
        cardMargin,
        visibleCards,
        containerWidth
      );

      setTranslateX(leftPadding - currentIndex * (cardWidth + cardMargin));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, productData?.length]);

  console.log({ translateX });

  return (
    <div className={styles.productTop10}>
      <h4 className={styles.productTop10Title}>吃到飽 eSIM 熱銷 TOP 10</h4>

      <div className={styles.productTop10Container}>
        <div className={styles.arrowLeftContent}>
          <ButtonArrow
            onClick={handlePrev}
            className={styles.arrowLeft}
            direction='left'
            style={{
              opacity: currentIndex === 0 ? 0 : undefined,
              cursor: currentIndex === 0 ? 'default' : 'pointer',
            }}
          />
        </div>

        <div ref={productListRef} className={styles.productListWrapper}>
          <div
            className={styles.productList}
            style={{
              transform: `translateX(${translateX}px)`,
              transition: 'transform 0.3s ease-in-out',
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {productData.map((product) => (
              <div key={product.id} className={clsx(styles.productCard)}>
                <div className={styles.imageWrapper}>
                  {product.isSpecial && (
                    <div className={styles.label}>Special Offer</div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.productImage}
                  />
                </div>

                <div className={styles.productInfo}>
                  <p className={styles.productName}>{product.name}</p>
                  {product.warning && (
                    <p className={styles.productWarning}>{product.warning}</p>
                  )}
                  <p className={styles.productPrice}>
                    NT${product.price}
                    <span className={styles.originalPrice}>
                      NT${product.originalPrice}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.arrowRightContent}>
          <ButtonArrow
            onClick={handleNext}
            className={styles.arrowRight}
            direction='right'
            style={{
              opacity:
                currentIndex >= productData.length - getVisibleCards()
                  ? 0
                  : undefined,
              cursor:
                currentIndex >= productData.length - getVisibleCards()
                  ? 'default'
                  : 'pointer',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductTop10;
