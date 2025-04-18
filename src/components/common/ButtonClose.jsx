import clsx from 'clsx';
import styles from './ButtonClose.module.scss';

import CrossIcon from '../../assets/icons/cross.svg?react';

import PropTypes from 'prop-types';

const ButtonClose = ({ onClick, size = 'm' }) => {
  return (
    <button className={styles.buttonClose} onClick={onClick}>
      <CrossIcon className={clsx(styles.closeIcon, styles[size])} />
    </button>
  );
};

ButtonClose.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['s', 'm', 'l']),
};

export default ButtonClose;
