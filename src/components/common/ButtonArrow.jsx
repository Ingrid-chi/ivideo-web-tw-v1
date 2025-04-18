import clsx from 'clsx';
import styles from './ButtonArrow.module.scss';

import Icons from '../common/Icons';

import PropTypes from 'prop-types';

const ICON_SIZES = {
  sm: '20px',
  md: '24px',
  lg: '32px',
  xl: '48px',
};

const ButtonArrow = ({ onClick, size, direction, className, style }) => {
  const iconSize = ICON_SIZES[size];

  // 自動計算按鈕大小（icon + padding）
  const buttonSize = {
    width: `calc(${iconSize} + 24px)`,
    height: `calc(${iconSize} + 24px)`,
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        styles.buttonArrow,
        styles[`buttonArrow--${direction}`],
        className
      )}
      style={{ ...buttonSize, ...style }}
    >
      {Icons.ArrowIcon({
        className: clsx(styles.arrowIcon, styles[`arrowIcon--${size}`]),
        style: { width: iconSize, height: iconSize },
      })}
    </button>
  );
};

ButtonArrow.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  direction: PropTypes.oneOf(['left', 'right', 'up', 'down']),
  className: PropTypes.string,
  style: PropTypes.object,
};

ButtonArrow.defaultProps = {
  size: 'md',
  direction: 'down',
  className: '',
  style: {},
};

export default ButtonArrow;
