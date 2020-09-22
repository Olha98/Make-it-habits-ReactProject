import React from 'react';
import logoimage from '../../../assests/images/LeftSideBar/logoimage.png';
import style from './Logo.module.css';

export default function Logo() {
  return (
    <>
      <div className={style.logo}>
        <div>
          <div>
            <img
              className={style.logo_image}
              src={logoimage}
              alt="logo"
              width="146"
            />
          </div>
        </div>
      </div>
    </>
  );
}
