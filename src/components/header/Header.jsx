import styles from './Header.module.scss';

import HeaderWeb from './HeaderWeb';
import HeaderMobile from './HeaderMobile';

import PropTypes from 'prop-types';

const Header = ({ isScrolled }) => {
  return (
    <div className={styles.headerWebWrapper}>
      <div className={styles.container}>
        {/* Web */}
        <HeaderWeb isScrolled={isScrolled} />

        {/* 平板 & 手機 */}
        <div className={styles.headerMobileWrapper}>
          <HeaderMobile isScrolled={isScrolled} />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  isScrolled: PropTypes.bool,
};

export default Header;
