import { useState, useEffect } from 'react';
import { navData } from './nav/navData';
import clsx from 'clsx';
import styles from './HeaderMobile.module.scss';

import Icons from '../common/Icons';
import Button from '../common/Button';
import NavIcons from './nav/NavIcons';
import SocialMedia from '../header/nav/SocialMedia';
import ButtonClose from '../common/ButtonClose';

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubMenu(null);
  };

  const toggleSubMenu = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  const handleClick = () => {
    alert('Button clicked!');
  };

  // 控制背景滾動
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <div className={styles.navMobile}>
      <div className={styles.container}>
        <a
          href='https://www.ivideo.com.tw/'
          target='_blank'
          rel='noopener noreferrer'
        >
          {Icons.Logo({ className: styles.logo })}
        </a>
        <div className={styles.navActions}>
          <NavIcons />
          <div className={styles.hamburgerWrapper} onClick={toggleMenu}>
            {Icons.HamburgerIcon({ className: styles.hamburgerIcon })}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className={styles.overlay} onClick={toggleMenu}></div>
      )}
      <div className={clsx(styles.mobileMenu, isMenuOpen && styles.active)}>
        <div className={styles.mobileMenuHeader}>
          <div className={styles.closeIcon} onClick={toggleMenu}>
            <ButtonClose />
          </div>
        </div>

        <ul className={styles.menuList}>
          {navData.map((item, index) => (
            <li key={index} className={styles.menuItem}>
              <div
                className={clsx(styles.menuItemTitle, {
                  [styles.active]: activeSubMenu === index, // 子選單展開時加上 active
                })}
                onClick={() => toggleSubMenu(index)}
              >
                <span>{item.title}</span>

                {item.subMenu.length > 0 && (
                  <span
                    className={clsx(
                      styles.expandIcon,
                      activeSubMenu === index && styles.active
                    )}
                  >
                    {Icons.ArrowIcon({ className: styles.arrowIcon })}
                  </span>
                )}
              </div>

              {item.subMenu.length > 0 && activeSubMenu === index && (
                <ul
                  className={clsx(styles.subMenu, {
                    [styles.active]: activeSubMenu === index,
                  })}
                >
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className={styles.subMenuItem}>
                      {subItem} {/* 渲染子選單項目 */}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className={styles.socialMedia}>
          <SocialMedia />
        </div>
        <div className={styles.buttonWrapper}>
          <Button type='primarySecondary' onClick={handleClick}>
            登入
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
