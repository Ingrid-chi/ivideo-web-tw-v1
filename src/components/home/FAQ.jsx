import { useState } from 'react';
import { faqData } from './faqData';
import clsx from 'clsx';
import styles from './FAQ.module.scss';

import Icons from '../common/Icons';

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  //
  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  // _,代表不會用到的參數
  const leftColumn = faqData.filter((_, index) => index % 2 === 0);
  const rightColumn = faqData.filter((_, index) => index % 2 !== 0);

  return (
    <div className={styles.faqWrapper}>
      <h4 className={styles.faqTitle}>常見問題</h4>
      <div className={styles.faqContainer}>
        {/* leftColumn */}
        <div className={styles.faqColumn}>
          {leftColumn.map((item) => (
            <div
              key={item.id}
              className={clsx(
                styles.faqBox,
                activeId === item.id ? styles.focus : ''
              )}
              onClick={() => toggleFAQ(item.id)}
            >
              <div
                className={clsx(styles.faqQuestionWrapper, {
                  [styles.active]: activeId == item.id,
                })}
                onClick={() => toggleFAQ(item.id)}
              >
                <p className={styles.faqQuestion}>{item.question}</p>
                <div
                  className={clsx(styles.faqQuestionIcon, {
                    [styles.active]: activeId === item.id,
                  })}
                >
                  {Icons.ArrowIcon({
                    className: styles.arrow,
                  })}
                </div>
              </div>

              <div
                className={clsx(
                  styles.faqAnswerWrapper,
                  activeId === item.id ? styles.show : styles.hide
                )}
              >
                <div className={styles.faqAnswerContainer}>
                  <div className={styles.faqAnswer}>{item.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* rightColumn */}
        <div className={styles.faqColumn}>
          {rightColumn.map((item) => (
            <div
              key={item.id}
              className={clsx(
                styles.faqBox,
                activeId === item.id ? styles.focus : ''
              )}
              onClick={() => toggleFAQ(item.id)}
            >
              <div
                className={clsx(styles.faqQuestionWrapper, {
                  [styles.active]: activeId == item.id,
                })}
                onClick={() => toggleFAQ(item.id)}
              >
                <p className={styles.faqQuestion}>{item.question}</p>
                <div
                  className={clsx(styles.faqQuestionIcon, {
                    [styles.active]: activeId === item.id,
                  })}
                >
                  {Icons.ArrowIcon({
                    className: styles.arrow,
                  })}
                </div>
              </div>

              <div
                className={clsx(
                  styles.faqAnswerWrapper,
                  activeId === item.id ? styles.show : styles.hide
                )}
              >
                <div className={styles.faqAnswerContainer}>
                  <div className={styles.faqAnswer}>{item.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
