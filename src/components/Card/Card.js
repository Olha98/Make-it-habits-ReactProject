import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Trash } from '../../assests/images/Card/trash.svg';
import { ReactComponent as TelegramIcon } from '../../assests/images/Card/telegram.svg';
import CardForm from './CardForm';
import CardList from './CardList';
import Payment from './Payment';
import {
  cardsSelectors,
  errorSelector,
  spinnerSelector,
} from '../../redux/selectors';
import { cardsOperations } from '../../redux/operations';
import style from './Card.module.css';

const colors = [
  '#655de6',
  '#b469fa',
  '#F8C102',
  '#43D190',
  '#FE6083',
  '#795548',
];

const Card = ({ cards, removeCard }) => {
  const [isShowModalCard, setIsShowCardForm] = useState(false);
  const [isShowModalPayment, setIsShowPaymentForm] = useState(false);
  let number, timeExpiration;
  if (cards.length > 0) {
    number = cards[0].number;
    timeExpiration = cards[0].timeExpiration;
  }
  const onRemove = () => {
    removeCard(cards[0].id);
  };

  return (
    <>
      <p className={style.sectionTitle}>Мои карты</p>
      <div className={style.cards}>
        <div
          className={style.cardFirst}
          style={{
            backgroundColor: `${
              cards.length ? colors[(cards[0].id - 1) % 6] : '#655de6'
            }`,
          }}
        >
          <p className={style.cardName}>Main card</p>
          <p className={style.cardNumber}>
            {cards.length ? `${number}` : 'xxxx xxxx xxxx xxxx'}
          </p>
          <p className={style.cardExpireDate}>
            Истекает {cards.length ? `${timeExpiration}` : ''}
          </p>
          <button
            className={style.cardDeleteButton}
            type="button"
            onClick={onRemove}
          >
            <Trash className={style.trashIcon} />
          </button>
        </div>
        {cards.length > 1 && <CardList />}
      </div>
      <div className={style.cardsButtons}>
        <button
          className={['btnTransparentWhiteBorder', style.buttonAdd].join(' ')}
          onClick={() => setIsShowCardForm(prev => !prev)}
        >
          + Добавить карту
        </button>
        <button
          className={['btnTransparentWhiteBorder', style.buttonPay].join(' ')}
          onClick={() => setIsShowPaymentForm(prev => !prev)}
        >
          Оплатить
        </button>
      </div>
      {isShowModalCard && <CardForm close={setIsShowCardForm} />}
      {isShowModalPayment && <Payment close={setIsShowPaymentForm} />}
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

const mapStateToProps = state => ({
  cards: cardsSelectors.getCards(state),
  isLoading: spinnerSelector.isLoading(state),
  error: errorSelector.getError(state),
});

const mapDispatchToProps = dispatch => ({
  removeCard: id => dispatch(cardsOperations.removeCard(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
