import React, { Component } from "react";
import { connect } from "react-redux";
import { quizInfoOperations } from "../../redux/operations";
import styles from "./ModalInterview.module.css";

class ModalInterview extends Component {
  state = {
    smokeYears: 0,
    cigarettePerDay: 0,
    cigarettePerTime: 0,
    cigarettePackPrice: 0,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddInfo(this.state);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      smokeYears,
      cigarettePerDay,
      cigarettePerTime,
      cigarettePackPrice,
    } = this.state;

    return (
      <section className={styles.modalInterview}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.title}>Ответьте на 4 коротких вопроса.</h2>
          <p className={styles.description}>
            Так мы сможем более точно дать вам рекомендации:
          </p>
        </header>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            Сколько лет Вы курите?
            <input
              className={styles.input}
              type="number"
              name="smokeYears"
              value={smokeYears}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Сколько сигарет скуриваете в день?
            <input
              className={styles.input}
              type="number"
              name="cigarettePerDay"
              value={cigarettePerDay}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Сколько вемени у Вас уходит на 1 сигарету?
            <input
              className={styles.input}
              type="number"
              name="cigarettePerTime"
              value={cigarettePerTime}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Сколько стоит одна пачка сигарет?
            <input
              className={styles.input}
              type="number"
              name="cigarettePackPrice"
              value={cigarettePackPrice}
              onChange={this.handleChange}
            />
          </label>
          <button className={styles.button} onClick={this.change} type="submit">
            Сохранить
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onAddInfo: (info) => dispatch(quizInfoOperations.addInfo(info)),
});

export default connect(null, mapDispatchToProps)(ModalInterview);
