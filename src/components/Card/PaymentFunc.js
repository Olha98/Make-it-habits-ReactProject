import React, { useEffect, useRef, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import modalBackDrop from '../ModalBackDrop/ModalBackDrop';
import Spinner from '../Spinner/Spinner';
import ErrorNotification from '../ErrorNotification/ErrorNotification';
import {
  cardsSelectors,
  errorSelector,
  spinnerSelector,
  subscrSelectors,
} from '../../redux/selectors';
import { errorActions } from '../../redux/actions';
import { cardsOperations } from '../../redux/operations';
import styles from './Card.module.css';

const delay = ms =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve('');
      console.log('delay');
    }, ms),
  );

const Payment = props => {
  const { cards, error, isLoading, plan, price } = props;
  const [amount, setAnmount] = useState(price);
  const [card, setCard] = useState('default');
  // const [isError, setIsErr] = useState(false);
  const isError = useRef(true);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('error', error);
    // error && setIsErr(true);
    if (error) {
      console.log('error in useEffect', error);
      isError.current = false;
    }
    // return () => {
    //   if (error) {
    //     dispatch(errorActions.hideError());
    //     console.log('error', error);
    //   }
    // };
  }, [error]);

  const changeAmount = e => {
    setAnmount(e.target.value);
  };

  const changeCard = e => {
    setCard(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const paidAt = Date.now();
    const inputAmount = Number(amount);
    const payment = { paidAt, amount: inputAmount };
    await props.onAddPayment(payment);
    if (!isError.current) {
      // response.status >= 400
      console.log('error', error);
      return;
    }
    props.close();
  };

  console.log('Does it render?');

  return (
    <section className={styles.modalForm}>
      <header
        className={styles.sectionHeader}
        style={{ marginBottom: `${error ? '20px' : '40px'}` }}
      >
        <h2 className={styles.title}>Введите данные для оплаты подписки:</h2>
        {error && <ErrorNotification />}
      </header>
      {isLoading && <Spinner />}

      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          Выберите платежную карту:
          <select
            name="card"
            className={styles.select}
            value={card}
            onChange={changeCard}
          >
            <option key="default" value="default" disabled>
              Выберите карту
            </option>
            {cards.map(card => (
              <option key={card.id} value={card.id}>
                {card.number}
              </option>
            ))}
          </select>
        </label>
        {plan !== 'Free' && (
          <>
            <p>&nbsp;</p>
            <div>
              Стоимость выбраного Вами плана подписки
              составляет:&nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: 'green', fontSize: '22px' }}>
                $&nbsp;{price}
              </span>
            </div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </>
        )}
        <label className={styles.label}>
          Введите сумму платежа:
          <input
            className={styles.input}
            type="number"
            name="amount"
            value={amount ? amount : ''}
            required
            onChange={changeAmount}
          />
        </label>
        <button
          className={styles.button}
          type="submit"
          style={{ margin: '0 auto' }}
        >
          Оплатить
        </button>
      </form>
    </section>
  );
};

const mapStateToProps = state => ({
  isLoading: spinnerSelector.isLoading(state),
  error: errorSelector.getError(state),
  cards: cardsSelectors.getCards(state),
  plan: subscrSelectors.getTypeSubscription(state),
  price: subscrSelectors.getPrice(state),
});

const mapDispatchToProps = {
  onAddPayment: cardsOperations.addPayment,
};

export default modalBackDrop(
  connect(mapStateToProps, mapDispatchToProps)(Payment),
);
