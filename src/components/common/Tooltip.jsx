import { useState } from 'react';
import clsx from 'clsx';
import styles from './Tooltip.module.scss';

import PropTypes from 'prop-types';

const Tooltip = ({ children, content, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={clsx(styles.tooltipContainer, className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <div className={styles.tooltip}>{content}</div>}
    </div>
  );
};

export default Tooltip;

// PropTypes 驗證
Tooltip.propTypes = {
  children: PropTypes.node, // 確保傳遞的是 React 元素或節點
  content: PropTypes.string,
  className: PropTypes.string,
};
