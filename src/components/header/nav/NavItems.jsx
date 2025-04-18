import { navData } from './navData';
import styles from './NavItems.module.scss';

import Icons from '../../../components/common/Icons';

const NavItems = () => {
  return (
    <div className={styles.navItems}>
      <ul className={styles.menu}>
        {navData.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <span className={styles.menuTitle}>
              {item.title}
              {item.subMenu.length > 0 && (
                <span className={styles.arrowWrapper}>
                  {Icons.ArrowIcon({ className: styles.arrowIcon })}
                </span>
              )}
            </span>

            {item.subMenu.length > 0 && (
              <ul className={styles.subMenu}>
                {item.subMenu.map((subItem, subIndex) => (
                  <li key={subIndex} className={styles.subItem}>
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
