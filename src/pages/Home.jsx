import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './Home.module.scss';

import NewsTicker from '../components/home/NewsTicker';
import Header from '../components/header/Header';
import Banner from '../components/home/Banner';
import ProductTop10 from '../components/home/ProductTop10';
import WhyChooseSection from '../components/home/whyChooseSection/WhyChooseSection';
import FAQ from '../components/home/FAQ';
import Promotions from '../components/home/Promotions';
import Footer from '../components/footer/Footer';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>日本 WiFi・eSIM 熱賣中 | iVideo 旅遊上網首選</title>
        <meta
          name='description'
          content='iVideo 提供多國旅遊 eSIM 與 WiFi 分享器，日本 eSIM 每日 $89 起，快速開通、支援全台配送，出國免煩惱！'
        />
        <meta
          name='keywords'
          content='日本 eSIM, 旅遊上網, WiFi 分享器, 出國網路, iVideo, 出國 SIM 卡'
        />

        {/* 社群分享 (Open Graph) */}
        <meta property='og:title' content='iVideo 旅遊上網首選｜eSIM 熱賣中' />
        <meta
          property='og:description'
          content='立即選購日本 eSIM 與 WiFi 分享器，每日只要 $89 起，快速啟用、輕鬆上網。'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.ivideo.com.tw/esim/unlimited'
        />
        <meta
          property='og:image'
          content='https://ivideo.com.tw/og_image/og_image_01.png'
        />

        {/* 基本設定 */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='UTF-8' />
        <html lang='zh-Hant' />
      </Helmet>

      {/* 分隔線 */}
      <div className={styles.Home}>
        <div
          className={clsx(
            styles.newsTickerWrapper,
            isScrolled && styles.hidden
          )}
        >
          <NewsTicker />
        </div>
        <Header isScrolled={isScrolled} />

        <Banner />
        <ProductTop10 />
        <WhyChooseSection />
        <FAQ />
        <Promotions />
        <Footer />
      </div>
    </>
  );
};

export default Home;
