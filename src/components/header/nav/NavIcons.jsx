import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './NavIcons.module.scss';

import Icons from '../../../components/common/Icons';
import ButtonClose from '../../common/ButtonClose';

const NavIcons = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const searchBoxRef = useRef(null);
  const searchButtonRef = useRef(null);

  const handleSearchSubmit = () => {
    if (searchText.trim()) {
      console.log('搜尋內容:', searchText);
      setIsSearchOpen(false);
      setSearchText('');
    }
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  const handleClearSearch = () => {
    setSearchText('');
  };

  const handleToggleSearch = (e) => {
    // 先判斷是不是從 icon 點進來，避免後續 document 事件誤關閉
    e.preventDefault();
    e.stopPropagation();

    if (isSearchOpen) {
      setSearchText('');
    }
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target) &&
        searchButtonRef.current &&
        !searchButtonRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
        setSearchText('');
      }
    };

    if (isSearchOpen) {
      document.addEventListener('pointerdown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <div className={styles.navIcons}>
      {/* 搜尋按鈕 */}
      <button
        ref={searchButtonRef}
        className={styles.searchButton}
        onClick={handleToggleSearch}
        aria-label='切換搜尋欄'
      >
        <Icons.SearchIcon className={styles.searchIcon} />
      </button>

      {/* 搜尋框 */}
      {isSearchOpen && (
        <div
          ref={searchBoxRef}
          className={clsx(styles.searchBox, {
            [styles.searchBoxOpen]: isSearchOpen,
          })}
        >
          <div className={styles.searchInputWrapper}>
            <span
              className={styles.searchIcon}
              onClick={handleSearchSubmit}
              role='button'
              aria-label='送出搜尋'
            >
              <Icons.SearchIcon className={styles.searchIcon} />
            </span>
            <input
              type='text'
              placeholder='請輸入關鍵字'
              className={styles.searchInput}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              autoFocus
              aria-label='搜尋欄位'
            />
            {searchText && <ButtonClose onClick={handleClearSearch} size='m' />}
          </div>
        </div>
      )}

      <a href='' target='' rel=''>
        <Icons.CartIcon className={styles.cartIcon} />
      </a>
      <a href='' target='' rel=''>
        <Icons.LoginIcon className={styles.loginIcon} />
      </a>
    </div>
  );
};

export default NavIcons;
