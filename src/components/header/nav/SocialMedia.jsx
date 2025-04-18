import { useEffect, useRef, useState } from 'react';
import styles from './SocialMedia.module.scss';

import Icons from '../../common/Icons';

const SocialMedia = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageRef = useRef(null);

  const handleToggleLanguage = () => {
    setIsLanguageOpen((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (languageRef.current && !languageRef.current.contains(e.target)) {
      setIsLanguageOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.socialMedia}>
      <a
        href='https://line.me/R/ti/p/%40syi2347j'
        target='_blank'
        rel='noopener noreferrer'
      >
        {Icons.Line({ className: styles.lineIcon })}
      </a>

      <a
        href='https://www.facebook.com/iVideotw/'
        target='_blank'
        rel='noopener noreferrer'
      >
        {Icons.Facebook({ className: styles.facebookIcon })}
      </a>
      <a
        href='https://www.instagram.com/ivideowifi.tw/'
        target='_blank'
        rel='noopener noreferrer'
      >
        {Icons.Instagram({ className: styles.igIcon })}
      </a>

      <div className={styles.languageWrapper} ref={languageRef}>
        <div onClick={handleToggleLanguage}>
          {Icons.LanguageIcon({ className: styles.languageIcon })}
        </div>

        {isLanguageOpen && (
          <ul className={styles.languageDropdown}>
            <li>
              <a
                href='https://www.ivideo.com.tw/esim/unlimited'
                target='_blank'
                rel='noopener noreferrer'
              >
                繁體中文
              </a>
            </li>
            <li>
              <a
                href='https://www.ivideo.com.tw/english/'
                target='_blank'
                rel='noopener noreferrer'
              >
                English
              </a>
            </li>
            <li>
              <a
                href='https://www.ivideo.com.tw/japanese/'
                target='_blank'
                rel='noopener noreferrer'
              >
                日本語
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SocialMedia;
