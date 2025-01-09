import React from 'react';
import styles from './index5.module.css';  // Import CSS module
import { reformatDate } from './Page1';

const Page5 = ({csvDataa,total}) => {
  return (
    <div className={styles.mainContainer}>
    <div className={styles.frame}>
      <div className={styles.clipPathGroup}>
        <div className={styles.group}>
          <div className={styles.group1}>
            <div className={styles.vector} />
          </div>
        </div>
      </div>
      <div className={styles.clipPathGroup2}>
        <div className={styles.group3}>
          <div className={styles.group4}>
            <div className={styles.rectangle} />
          </div>
        </div>
      </div>
      <div className={styles.group5} />
      <div className={styles.clipPathGroup6}>
        <div className={styles.group7}>
          <div className={styles.group8}>
            <div className={styles.rectangle9} />
          </div>
        </div>
      </div>
      <span className={styles.zzrSlRS}>
        2137.5097.10.10 ZZ258R3 0303 SL.R3.S917.D167.O V06.00.37
      </span>
    </div>
  </div>
  );
}

export default Page5;
