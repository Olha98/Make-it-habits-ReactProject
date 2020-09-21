import React from 'react';
import { Link } from 'react-router-dom';

import styles from './page404.module.css';

const NotFound = () => {
  return (
    <section className={styles.wrap}>
      <div id="clouds">
        <div class="cloud x1"></div>
        <div class="cloud x1_5"></div>
        <div class="cloud x2"></div>
        <div class="cloud x3"></div>
        <div class="cloud x4"></div>
        <div class="cloud x5"></div>
      </div>
      <div class="c">
        <div class="_404">404</div>
        <hr />
        <div class="_1">СТРАНИЦА</div>
        <div class="_2">НЕ НАЙДЕНА</div>
        <p>
          Вот <Link to="/">ccылка</Link> на главную страницу.
        </p>
      </div>
    </section>
  );
};

export default NotFound;
