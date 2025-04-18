import { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

import PropTypes from 'prop-types';

const Button = ({
  type = 'primarySecondary',
  children,
  onClick,
  disabled = false,
}) => {
  const [buttonSize, setButtonSize] = useState('buttonLarge');

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth <= 375) {
        setButtonSize('buttonSmall');
      } else if (window.innerWidth <= 768) {
        setButtonSize('buttonMedium');
      } else {
        setButtonSize('buttonLarge');
      }
    };

    updateSize(); // 初始設定
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const buttonClass = clsx(styles.button, styles[buttonSize], {
    [styles.primarySecondary]: type === 'primarySecondary' && !disabled,
    [styles.secondarySecondary]: type === 'secondarySecondary' && !disabled,
    [styles.primarySecondaryDisabled]: type === 'primarySecondary' && disabled,
    [styles.secondarySecondaryDisabled]:
      type === 'secondarySecondary' && disabled,
  });

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.element,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
