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

/* <>
<section className="logo">
  <div className="leftSideBar-wrapper">
    <div className="leftSideBar-logo">
      <img
        src=""
        alt="logo"
        width="146"
        className="leftSideBar-logo__img"
      />
    </div>
  </div>
</section>
</> */
