import styles from './HeaderBranding.module.scss';

import Icons from '../../components/common/Icons';
import SocialMedia from './nav/SocialMedia';

const HeaderBranding = () => {
  return (
    <div className={styles.headerBranding}>
      <a
        href='https://www.ivideo.com.tw/'
        target='_blank'
        rel='noopener noreferrer'
      >
        {Icons.Logo({ className: styles.logo })}
      </a>
      <SocialMedia />
    </div>
  );
};

export default HeaderBranding;
