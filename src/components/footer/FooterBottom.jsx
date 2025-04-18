import styles from './FooterBottom.module.scss';

const FooterBottom = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        <p>© Copyright WaveThink Technology Inc. All Rights Reserved.</p>
        <p>安全網站標章 | 服務條款</p>
      </div>
    </div>
  );
};

export default FooterBottom;
