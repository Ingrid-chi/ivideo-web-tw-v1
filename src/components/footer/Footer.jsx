import { useState } from 'react';
import { footerData } from './footerData';
import clsx from 'clsx';
import styles from './Footer.module.scss';

import FooterBottom from './FooterBottom';
import Icons from '../common/Icons';

const Footer = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleSection = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        {footerData.map((section) => (
          <div
            key={section.id}
            className={clsx(
              styles.footerColumn,
              activeId === section.id && styles.active
            )}
          >
            <button
              className={styles.footerToggle}
              onClick={() => toggleSection(section.id)}
            >
              <h4 className={styles.footerTitle}>{section.title}</h4>

              {Icons.ArrowIcon({
                className: clsx(
                  styles.arrowIcon,
                  activeId === section.id && styles.arrowOpen
                ),
              })}
            </button>

            <div
              className={clsx(styles.footerContent, {
                [styles.active]: activeId === section.id,
              })}
            >
              {/* 付款方式專用渲染 */}
              {section.title === '付款方式' ? (
                <div className={styles.footerImgWrapper}>
                  {section.items.map((item) => (
                    <img
                      key={item.id}
                      src={item.image}
                      alt='payment'
                      className={styles.footerImg}
                    />
                  ))}
                </div>
              ) : section.serviceGroup ? (
                //  {/* serviceGroup */}
                section.serviceGroup?.map((service) => (
                  <div
                    key={service.serviceTitle}
                    className={styles.footerService}
                  >
                    <div className={styles.footerServiceTitle}>
                      {service.serviceTitle}
                    </div>

                    {service.items.map((item) => (
                      <div key={item.id} className={styles.footerItem}>
                        {item.subtitle && item.content && (
                          <div className={styles.footerSubtext}>
                            <p className={styles.subtitle}>{item.subtitle}：</p>
                            <p>{item.content}</p>
                          </div>
                        )}
                        {item.content1 && item.content2 && (
                          <div className={styles.footerSubtext}>
                            <p>{item.subtitle}：</p>
                            <p>{item.content1}</p>
                            <p>{item.content2}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))
              ) : (
                section.items?.map((item) => (
                  <div key={item.id} className={styles.footerItem}>
                    {/* 有 subtitle 跟 content */}

                    {item.subtitle && item.content && (
                      <div className={styles.footerSubtext}>
                        <p className={styles.subtitle}>{item.subtitle}：</p>
                        <p>{item.content}</p>
                      </div>
                    )}

                    {/* content1 和 content2（多行） */}
                    {item.content1 && item.content2 && (
                      <div className={styles.footerSubtext}>
                        <p>{item.subtitle}：</p>
                        <p>{item.content1}</p>
                        <p>{item.content2}</p>
                      </div>
                    )}

                    {/* 只有 content（無 subtitle） */}
                    {!item.subtitle && item.content && !item.url && (
                      <p>{item.content}</p>
                    )}

                    {/* 有超連結 */}
                    {/* disabled */}
                    {item.url && !item.disabled ? (
                      <a href={item.url} className={styles.footerLink}>
                        {item.content}
                      </a>
                    ) : item.disabled ? (
                      <span className={styles.footerDisabled}>
                        {item.content}
                      </span>
                    ) : null}
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footerBottom}>
        <FooterBottom />
      </div>
    </div>
  );
};

export default Footer;
