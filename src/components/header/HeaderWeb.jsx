import clsx from 'clsx';
import styles from './HeaderWeb.module.scss';

import Nav from './nav/Nav';
import HeaderBranding from './HeaderBranding';
import PropTypes from 'prop-types';

const HeaderWeb = ({ isScrolled }) => {
  return (
    <div
      className={clsx(styles.headerWebWrapper, isScrolled && styles.scrolled)}
    >
      <HeaderBranding className={styles.headerBranding} />

      {/* 分隔線 */}
      <div className={styles.divider}></div>

      <Nav className={styles.navWeb} />
    </div>
  );
};

HeaderWeb.propTypes = {
  isScrolled: PropTypes.bool,
};

export default HeaderWeb;
