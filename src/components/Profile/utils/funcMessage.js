import React from 'react';
import style from '../Profile.module.css';

function funcMessage(errorMessage) {
  return (
    <>
      <span className={style.errorMessage}>{errorMessage}</span>
    </>
  );
}

export default funcMessage;
