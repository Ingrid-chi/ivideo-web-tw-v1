import clsx from 'clsx';
import styles from './Icons.module.scss';

import PropTypes from 'prop-types';

// // icons import
// import Logo from '../../../public/logo_ivideo.svg?react';
// import Line from '../../../public/icons_social_media/line.svg?react';
// import Facebook from '../../../public/icons_social_media/facebook.svg?react';
// import Instagram from '../../../public/icons_social_media/instagram.svg?react';

// import LanguageIcon from '../../assets/icons/language.svg?react';
// import SearchIcon from '../../assets/icons/search.svg?react';
// import CartIcon from '../../assets/icons/cart.svg?react';
// import LoginIcon from '../../assets/icons/login.svg?react';
// import HamburgerIcon from '../../assets/icons/hamburger.svg?react';
// import CrossIcon from '../../assets/icons/cross.svg?react';
// import ArrowIcon from '../../assets/icons/arrow.svg?react';

// // Helper function 產生 Icon Component 並附上 propTypes
// const createIconComponent = (Icon, className) => {
//   const Component = ({ className: customClass }) => (
//     <Icon className={clsx(className, customClass)} />
//   );
//   Component.propTypes = {
//     className: PropTypes.string,
//   };
//   return Component;
// };

// // 組裝 Icon 組件
// const Icons = {
//   Logo: createIconComponent(Logo, styles.logo),
//   Line: createIconComponent(Line, styles.socialMedia),
//   Facebook: createIconComponent(Facebook, styles.socialMedia),
//   Instagram: createIconComponent(Instagram, styles.socialMedia),
//   LanguageIcon: createIconComponent(LanguageIcon, styles.iconPrimary),
//   SearchIcon: createIconComponent(SearchIcon, styles.iconPrimary),
//   CartIcon: createIconComponent(CartIcon, styles.iconPrimary),
//   LoginIcon: createIconComponent(LoginIcon, styles.iconPrimary),
//   HamburgerIcon: createIconComponent(HamburgerIcon, styles.iconPrimary),
//   CrossIcon: createIconComponent(CrossIcon, styles.iconPrimary),
//   ArrowIcon: createIconComponent(ArrowIcon, styles.iconPrimary),
// };

// export default Icons;

// ### 修正 ###
// 因為原始 svg 檔裡面的 icon(例如 facebook 的 f) 經過 react 轉成的 svg 之後，那個 icon 因為不是向量，是一張完整的圖片，所以轉換會有點問題
// 改成直接用 img 的方式
import logoPath from '../../../public/logo_ivideo.svg';
import linePath from '../../../public/icons_social_media/line.svg';
import facebookPath from '../../../public/icons_social_media/facebook.svg';
import instagramPath from '../../../public/icons_social_media/instagram.svg';

// import languageIconPath from '../../assets/icons/language.svg';
// import searchIconPath from '../../assets/icons/search.svg';
// import cartIconPath from '../../assets/icons/cart.svg';
// import loginIconPath from '../../assets/icons/login.svg';
// import hamburgerIconPath from '../../assets/icons/hamburger.svg';
// import crossIconPath from '../../assets/icons/cross.svg';
// import arrowIconPath from '../../assets/icons/arrow.svg';

import LanguageSvgIcon from '../../assets/icons/language.svg?react';
import SearchSvgIcon from '../../assets/icons/search.svg?react';
import CartSvgIcon from '../../assets/icons/cart.svg?react';
import LoginSvgIcon from '../../assets/icons/login.svg?react';
import HamburgerSvgIcon from '../../assets/icons/hamburger.svg?react';
import CrossSvgIcon from '../../assets/icons/cross.svg?react';
import ArrowSvgIcon from '../../assets/icons/arrow.svg?react';

const createImgComponent = (src, defaultClassName, defaultStyle = {}) => {
  // ### 修正 ###
  // 外面要用 style props的話，這邊也要加上 style 不然吃不到
  const Component = ({ className: customClass, alt = '', style = {} }) => (
    <img
      src={src}
      alt={alt}
      className={clsx(defaultClassName, customClass)}
      style={{ ...defaultStyle, ...style }}
    />
  );
  Component.propTypes = {
    className: PropTypes.string,
    alt: PropTypes.string,
    style: PropTypes.object,
  };
  return Component;
};

const createSvgComponent = (Icon, defaultClassName) => {
  const Component = ({ className }) => (
    <Icon className={clsx(defaultClassName, className)} />
  );
  Component.propTypes = {
    className: PropTypes.string,
  };
  return Component;
};

const Icons = {
  Logo: createImgComponent(logoPath, styles.logo),
  Line: createImgComponent(linePath, styles.socialMedia),
  Facebook: createImgComponent(facebookPath, styles.socialMedia),
  Instagram: createImgComponent(instagramPath, styles.socialMedia),
  LanguageIcon: createSvgComponent(LanguageSvgIcon, styles.iconPrimary),
  SearchIcon: createSvgComponent(SearchSvgIcon, styles.iconPrimary),
  CartIcon: createSvgComponent(CartSvgIcon, styles.iconPrimary),
  LoginIcon: createSvgComponent(LoginSvgIcon, styles.iconPrimary),
  HamburgerIcon: createSvgComponent(HamburgerSvgIcon, styles.iconPrimary),
  CrossIcon: createSvgComponent(CrossSvgIcon, styles.iconPrimary),
  ArrowIcon: createSvgComponent(ArrowSvgIcon, styles.iconPrimary),
};

export default Icons;
