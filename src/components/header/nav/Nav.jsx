import styles from './Nav.module.scss';

import NavIcons from './NavIcons';
import NavItems from './NavItems';
import Button from '../../../components/common/Button';

const Nav = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <NavItems />
        <div className={styles.navActions}>
          <NavIcons />

          <Button type='primarySecondary' onClick={handleClick}>
            登入
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
