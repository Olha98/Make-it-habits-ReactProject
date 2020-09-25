import React, { Component } from 'react';
import { connect } from 'react-redux';
import { quizInfoOperations } from '../../redux/operations';
import { spinnerSelector, errorSelector } from '../../redux/selectors';
import { errorActions } from '../../redux/actions';
import modalBackDrop from '../ModalBackDrop/ModalBackDrop';
import Spinner from '../Spinner/Spinner';
import styles from './ModalInterview.module.css';

class ModalInterview extends Component {
  state = {
    smokeYears: 0,
    cigarettePerDay: 0,
    cigarettePerTime: 0,
    cigarettePackPrice: 0,
  };
  handleSubmit = async e => {
    e.preventDefault();
    await this.props.onAddInfo(this.state);
    if (this.props.error) {
      return;
    }
    this.props.closeModal();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  componentWillUnmount() {
    this.props.error && this.props.handleClose();
  }

  render() {
    const {
      smokeYears,
      cigarettePerDay,
      cigarettePerTime,
      cigarettePackPrice,
    } = this.state;
    const { error, isLoading } = this.props;
    return (
      <section className={styles.modalInterview}>
        <header
          className={styles.sectionHeader}
          style={{ marginBottom: `${error ? '20px' : '40px'}` }}
        >
          <h2 className={styles.title}>Ответьте на 4 коротких вопроса.</h2>
          <p className={styles.description}>
            Так мы сможем более точно дать вам рекомендации:
          </p>
          {error && (
            <h3 className={styles.error}>
              Извините, произошла ошибка: {error}{' '}
            </h3>
          )}
        </header>
        {isLoading && <Spinner />}
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <div className={styles.inputFields}>
            <label className={styles.label}>
              Сколько лет Вы курите?
              <input
                className={styles.input}
                type="number"
                name="smokeYears"
                value={smokeYears ? smokeYears : ''}
                required
                onChange={this.handleChange}
              />
            </label>
            <label className={styles.label}>
              Сколько сигарет скуриваете в день?
              <input
                className={styles.input}
                type="number"
                name="cigarettePerDay"
                value={cigarettePerDay ? cigarettePerDay : ''}
                required
                onChange={this.handleChange}
              />
            </label>
            <label className={styles.label}>
              Сколько вемени у Вас уходит
              <br />
              на 1 сигарету?
              <input
                className={styles.input}
                type="number"
                name="cigarettePerTime"
                value={cigarettePerTime ? cigarettePerTime : ''}
                required
                placeholder="__ мин"
                onChange={this.handleChange}
              />
            </label>
            <label className={styles.label}>
              Сколько стоит одна пачка сигарет?
              <input
                className={styles.input}
                type="number"
                name="cigarettePackPrice"
                value={cigarettePackPrice ? cigarettePackPrice : ''}
                required
                placeholder="__.__ грн"
                onChange={this.handleChange}
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
  error: errorSelector.getError(state),
  isLoading: spinnerSelector.isLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onAddInfo: info => dispatch(quizInfoOperations.addInfo(info)),
  handleClose: () => dispatch(errorActions.hideError()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(modalBackDrop(ModalInterview));
