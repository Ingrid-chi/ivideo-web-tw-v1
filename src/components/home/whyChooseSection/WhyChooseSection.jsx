import { useState } from 'react';
import { whyChooseData } from './whyChooseData';
import styles from './WhyChooseSection.module.scss';

import WhyChooseTabs from './WhyChooseTabs';
import WhyChoosePanel from './WhyChoosePanel';

const WhyChooseSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.whyChooseSection}>
      <h4 className={styles.whyChooseTitle}>購物新體驗 服務零距離</h4>
      <WhyChooseTabs
        activeIndex={activeIndex}
        onTabChange={setActiveIndex}
        data={whyChooseData}
      />
      <WhyChoosePanel activeItem={whyChooseData[activeIndex]} />
    </div>
  );
};

export default WhyChooseSection;
