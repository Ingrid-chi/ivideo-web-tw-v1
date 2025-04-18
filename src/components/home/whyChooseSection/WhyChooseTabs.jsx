import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './WhyChooseTabs.module.scss';

import Tooltip from '../../../components/common/Tooltip';
import PropTypes from 'prop-types';

const WhyChooseTabs = ({ activeIndex, onTabChange, data }) => {
  const tabRefs = useRef({});

  const [tooltipVisible, setTooltipVisible] = useState({});

  const checkTextOverflow = () => {
    data.forEach((item) => {
      const tabNameElement = tabRefs.current[item.id];

      if (tabNameElement) {
        const isOverflowing =
          tabNameElement.scrollWidth > tabNameElement.clientWidth;

        setTooltipVisible((prev) => ({
          ...prev,
          [item.id]: isOverflowing,
        }));
      }
    });
  };

  useEffect(() => {
    // 等待DOM完全渲染和樣式應用
    const timer = setTimeout(checkTextOverflow, 100);

    window.addEventListener('resize', checkTextOverflow);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkTextOverflow);
    };
  }, [data]);

  return (
    <div className={styles.whyChooseTabs}>
      <div className={styles.tabsList}>
        {data.map((item, index) => (
          <div key={item.id}>
            <div
              className={clsx(styles.tabItem, {
                [styles.active]: activeIndex === index,
                [styles.disabled]: item.isDisabled,
              })}
              onClick={() => {
                if (item.isDisabled) return;
                onTabChange(index);
              }}
            >
              {tooltipVisible[item.id] ? (
                <Tooltip content={item.name}>
                  <div
                    ref={(el) => (tabRefs.current[item.id] = el)}
                    className={styles.tabName}
                  >
                    {item.name}
                  </div>
                </Tooltip>
              ) : (
                <div
                  ref={(el) => (tabRefs.current[item.id] = el)}
                  className={styles.tabName}
                >
                  {item.name}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseTabs;

// PropTypes 驗證
WhyChooseTabs.propTypes = {
  activeIndex: PropTypes.number,
  onTabChange: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      isDisabled: PropTypes.bool,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          image: PropTypes.string,
          title: PropTypes.string,
          content: PropTypes.string,
        })
      ),
    })
  ),
};
