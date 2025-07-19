import React from 'react';
import styles from './UpcomingBill.module.scss';


function UpcomingBill(props) {
	
	return (
    <div className={styles['bills-wrapper']}>
      <h3 className={styles['bills-title']}>Upcoming bill</h3>
      <div className={`${styles['bills-card-wrapper']} overview-top-card`}>
        <div className={`${styles['bills-card']} ${styles['first']}`}>
          <div className={styles['date']}>
            <p className={styles['months']}>May</p>
            <p className={styles['day']}>15</p>
          </div>
          <div className={styles['desc']}>
            <img src="/Figma.png" alt="Figma logo" />
            <h4 className={styles['title']}>Figma - Monthly</h4>
            <p className={styles['text']}>Last Charge - 14 May, 2022</p>
          </div>
          <p className={styles['price']}>$150</p>
        </div>

        <div className={`${styles['bills-card']} ${styles['second']}`}>
          <div className={styles['date']}>
            <p className={styles['months']}>May</p>
            <p className={styles['day']}>15</p>
          </div>
          <div className={styles['desc']}>
            <img src="/Adobe.png" alt="Adobe logo" />
            <h4 className={styles['title']}>Adobe - Yearly</h4>
            <p className={styles['text']}>Last Charge - 17 Jun, 2023</p>
          </div>
          <p className={styles['price']}>$559</p>
        </div>
      </div>
    </div>
  );

}

export default UpcomingBill;