import clsx from 'clsx';
import styles from './WhyChoosePanel.module.scss';

import PropTypes from 'prop-types';

const WhyChoosePanel = ({ activeItem }) => {
  if (!activeItem) return null;

  return (
    <div
      className={clsx(styles.whyChoosePanel, {
        [styles.empty]: activeItem.items.every((item) => !item.content?.trim()),
      })}
    >
      {/* .every() 是 JS 陣列方法，所有東西都符合這個條件才會回傳 true */}
      {/* .trim() 是把前後空白剪掉 */}
      {/* 如果 !item.content 沒有內容就出現 ComingSoon 否則，... */}
      {activeItem.items.every((item) => !item.content?.trim()) ? (
        <div className={styles.comingSoon}>Coming Soon</div>
      ) : (
        activeItem.items.map((item) => (
          <div key={item.id} className={styles.panelContainer}>
            <div className={styles.panelImg}>
              <img src={item.image} alt={item.title} />
            </div>

            <div className={styles.panelTitle}>{item.title}</div>

            <div className={styles.panelContent}>
              {item.content?.trim() || 'Coming Soon'}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default WhyChoosePanel;

WhyChoosePanel.propTypes = {
  activeItem: PropTypes.shape({
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
  }),
};
