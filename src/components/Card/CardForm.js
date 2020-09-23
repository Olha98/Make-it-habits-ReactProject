import React, { Component } from 'react';
import { connect } from 'react-redux';
import modalBackDrop from '../ModalBackDrop/ModalBackDrop';
import Spinner from '../Spinner/Spinner';
import { errorSelector, spinnerSelector } from '../../redux/selectors';
import { subscrActions } from '../../redux/actions';
import styles from './Card.module.css';
import InputMask from 'react-input-mask';
import { cardsOperations } from '../../redux/operations';

class CardForm extends Component {
  state = {
    name: 'Моя карта',
    number: '',
    timeExpiration: '',
    message: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleKeyDown = e => {
    const { timeExpiration } = this.state;
    console.log('timeExpiration', timeExpiration);
    const digit = e.key;
    if (!/^\d+$/.test(digit)) {
      return;
    }

    const { name, value } = e.target;
    const input = e.target;

    // let val = value.replace(/_/g, '');
    // val = val.replace(/ \/ /g, '');
    let val;
    if (isNaN(parseInt(value, 10))) {
      val = '';
    } else if (value[1] === '_') {
      val = value[0];
    } else {
      val = value;
      console.log('val = value');
    }

    val += digit;
    console.log('val', val);
    let newVal;
    if (/^\d$/.test(val) && val !== '0' && val !== '1') {
      console.log('one digit');
      e.preventDefault();
      newVal = `0${val} / `;
      // input.setRangeText(newVal, 0, 5, 'end');
      this.setState({ [name]: newVal }, () => {
        setTimeout(function () {
          input.setSelectionRange(5, 5);
        }, 150);
      });
      // input.setSelectionRange(5, 5);
    } else if (/^\d\d$/.test(val)) {
      console.log('two digits');
      e.preventDefault();
      const m1 = parseInt(val[0], 10);
      const m2 = parseInt(val[1], 10);
      if (m2 > 2 && m1 !== 0) {
        newVal = `0${m1} / ${m2}`;
        this.setState({ [name]: newVal }, () => {
          setTimeout(function () {
            input.setSelectionRange(6, 6);
          }, 150);
        });
        // input.setRangeText(newVal, 0, 6, 'end');
      } else {
        newVal = `${val} / `;
        this.setState({ [name]: newVal }, () => {
          setTimeout(() => {
            input.setSelectionRange(5, 5);
          }, 150);
        });
        // input.setRangeText(newVal, 0, 5, 'end');
        // input.setSelectionRange(5, 5);
      }
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    let { number, timeExpiration, message } = this.state;
    let cardNumber = number.replace(/ /g, '');
    cardNumber = parseInt(cardNumber);
    const strNumber = cardNumber.toString();
    let [month, year] = timeExpiration.split('/');
    // console.log('month, year as strings:', month, year);
    if (month) month = month.replace(/_/g, '');
    if (year) year = year.replace(/_/g, '');
    month = parseInt(month);
    year = parseInt(year);
    // console.log('month, year, strNumber', month, year, strNumber);
    if (strNumber.length < 16) {
      this.setState({
        message: 'Введите все 16 цифр номера карты, пожалуйста',
      });
    } else if (!month || !year) {
      this.setState({
        message: 'Введите все цифры срока действия, пожалуйста',
      });
    } else if (month > 12) {
      this.setState({
        message: 'Введите месяц от 1 до 12 в сроке действия',
      });
    } else {
      this.setState({
        message: '',
      });
      const time = new Date(`${month}-1-${year}`);
      // console.log('time', time);
      await this.props.addCard({ number, timeExpiration: time });
      if (this.props.error) {
        return;
      }
      this.props.close();
    }
  };

  render() {
    console.log('RENDER');
    const { number, timeExpiration, message } = this.state;
    const { isLoading, error } = this.props;

    return (
      <section className={styles.modalCardForm}>
        <header
          className={styles.sectionHeader}
          style={{ marginBottom: `${error || message ? '20px' : '40px'}` }}
        >
          <h2 className={styles.title}>Введите данные по платежной карте:</h2>
          {error && (
            <h3 className="error">Извините, произошла ошибка: {error} </h3>
          )}
          {message && <h3 className="error">{message} </h3>}
        </header>
        {isLoading && <Spinner />}

        <form className={styles.form} onSubmit={this.handleSubmit}>
          <div className={styles.inputFields}>
            <label className={styles.label}>
              Номер карты:
              <InputMask
                className={styles.input}
                name="number"
                value={number}
                mask="9999  9999  9999  9999"
                placeholder="xxxx xxxx xxxx xxxx"
                onChange={this.handleChange}
              />
            </label>
            <label className={styles.label}>
              Срок действия:
              <InputMask
                className={styles.input}
                name="timeExpiration"
                value={timeExpiration}
                mask="99 / 99"
                placeholder="ММ / ГГ"
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
              />
            </label>
          </div>
          <button
            className={styles.button}
            type="submit"
            style={{ margin: '0 auto' }}
          >
            Сохранить
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: spinnerSelector.isLoading(state),
  error: errorSelector.getError(state),
});

const mapDispatchToProps = {
  // addCard: subscrActions.addCardSuccess, // если добавят поле на бэке, то взять метод из Operations
  addCard: cardsOperations.addCard,
};

export default modalBackDrop(
  connect(mapStateToProps, mapDispatchToProps)(CardForm),
);
