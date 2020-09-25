import React, { Component } from 'react';
import { connect } from 'react-redux';
import modalBackDrop from '../ModalBackDrop/ModalBackDrop';
import Spinner from '../Spinner/Spinner';
import {
  cardsSelectors,
  errorSelector,
  spinnerSelector,
  subscrSelectors,
} from '../../redux/selectors';
import { cardsOperations } from '../../redux/operations';
import styles from './Card.module.css';

class Payment extends Component {
  state = {
    card: 'default',
    amount: this.props.price,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const paidAt = Date.now();
    const amount = Number(this.state.amount);
    const payment = { paidAt, amount };
    this.props.onAddPayment(payment);
    this.props.close();
  };

  render() {
    const { amount } = this.state;
    const { cards, error, isLoading, plan, price } = this.props;

    return (
      <section className={styles.modalForm}>
        <header
          className={styles.sectionHeader}
          style={{ marginBottom: `${error ? '20px' : '40px'}` }}
        >
          <h2 className={styles.title}>Введите данные для оплаты подписки:</h2>
          {error && (
            <h3 className="error">Извините, произошла ошибка: {error} </h3>
          )}
        </header>
        {isLoading && <Spinner />}

        <form onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            Выберите платежную карту:
            <select
              name="card"
              className={styles.select}
              value={this.state.card}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
  }
}

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
