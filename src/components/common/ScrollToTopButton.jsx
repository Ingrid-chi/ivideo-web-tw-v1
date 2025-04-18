import { useEffect, useState } from 'react';
import styles from './ScrollToTopButton.module.scss';

import ButtonArrow from './ButtonArrow';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <div className={styles.scrollToTopBtn}>
        <ButtonArrow onClick={scrollToTop} direction='up' size='lg' />
      </div>
    )
  );
};

export default ScrollToTopButton;
