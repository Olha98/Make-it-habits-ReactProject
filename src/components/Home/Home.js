import React from 'react';
import { ReactComponent as Logo } from '../../assests/images/Home/logo/MakeitHabit.svg';
import { ReactComponent as Svg } from '../../assests/images/Home/logo/Subtract.svg';
import styles from './Home.module.css';

const HomePage = ({ onLogin, onRegistration }) => {
  return (
    <div className={styles.HomeContainer}>
      <div className={styles.Home}>
        <div className={styles.HomeLeft}>
          <div className={styles.HomeBackground1}></div>
          <div className={styles.HomeBackground2}></div>
        </div>

        <div className={styles.HomeCentre}>
          <div className={styles.HomeBlock}>
            <p className={styles.HomeTitle}>
              «Курение ослабляет силу мысли и делает неясным её выражение».
            </p>
            <p className={styles.HomeTitleName}>Л.Н.Толстой</p>
            <div className={styles.HomeLogo}>
              <div className={styles.HomeLogoSvg}>
                <div className={styles.HomeLogoPng}>
                  <Svg />
                </div>
              </div>
              <Logo />
            </div>
            <p className={styles.HomeTitleHi}>Добро пожаловать!</p>
            <p className={styles.HomeTitleTxt}>
              Войдите или зарегистрируйтесь, чтобы начать использовать наше
              приложение
            </p>
            <div className={styles.HomeButtonBlock}>
              <button onClick={onLogin} className={styles.HomeButton}>
                <p className={styles.HomeEnterTxt}>Вход</p>
              </button>
              <button onClick={onRegistration} className={styles.HomeButton}>
                <p className={styles.HomeEnterTxt}>Регистрация</p>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.HomeRight}>
          <div className={styles.HomeBackground3}></div>
          <div className={styles.HomeBackground4}></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
