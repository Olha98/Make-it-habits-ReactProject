import React, { Component, useState } from 'react';
import { ReactComponent as Trash } from '../../assests/images/Card/trash.svg';
import { ReactComponent as TelegramIcon } from '../../assests/images/Card/telegram.svg';
import CardForm from './CardForm';
import style from './Card.module.css';

const Card = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <>
      <p className={style.sectionTitle}>Мои карты</p>
      <div className={style.card}>
        <p className={style.cardName}>Моя карта</p>
        <p className={style.cardNumber}>4213 3535 5631 0991</p>
        <p className={style.cardExpireDate}>Истекает 31.07.2024</p>
        <button className={style.cardDeleteButton}>
          <Trash className={style.trashIcon} />
        </button>
      </div>
      <div className={style.cardsButtons}>
        <button
          className={['btnTransparentWhiteBorder', style.buttonAdd].join(' ')}
          onClick={() => setIsShowModal(prev => !prev)}
        >
          + Добавить карту
        </button>
        <button
          className={['btnTransparentWhiteBorder', style.buttonPay].join(' ')}
        >
          Оплатить
        </button>
      </div>
      {isShowModal && <CardForm close={setIsShowModal} />}
      <div className={style.supportContainer}>
        <div className={style.supportPic}>{/* <SupportPic /> */}</div>
        <div className={style.supportInfo}>
          <p className={style.supportInfoTitle}>
            Напишите нам, если у Вас возникли вопросы:
          </p>
          <p className={style.supportInfoEmail}>info@dishi.com</p>
          <div className={style.supportInfoTelegram}>
            <TelegramIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
