import React from 'react';
import { Link } from 'react-router-dom';

import styles from './page404.module.css';

const NotFound = () => {

  return (
    <section className={styles.section404}>
      <div id="clouds">
        <div className={[styles.cloud, styles.x1].join(' ')}></div>
        <div className={[styles.cloud, styles.x1_5].join(' ')}></div>
        <div className={[styles.cloud, styles.x2].join(' ')}></div>
        <div className={[styles.cloud, styles.x3].join(' ')}></div>
        <div className={[styles.cloud, styles.x4].join(' ')}></div>
        <div className={[styles.cloud, styles.x5].join(' ')}></div>
      </div>
      <div className={styles.c}>
        <div className={styles._404}>404</div>
        <hr className={styles._hr} />
        <div className={styles._1}>СТРАНИЦА</div>
        <div className={styles._2}>НЕ&nbsp;&nbsp;НАЙДЕНА</div>
        <Link to="/" className={styles.btn}>
          Ccылка на главную
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
