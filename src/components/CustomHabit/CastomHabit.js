import React, { Component } from "react";
import style from "./CastomHabit.module.css";
import { connect } from "react-redux";
import castomHabitActions from "../../redux/actions/castomHabitActions";
import castomHabitOperation from "../../redux/operations/castomHabitOperation";

class CastomHabit extends Component {
  state = {
    name: "",
    date: "",
    iteration: "",
    time: ""
  };

  // handleSubmit = e => {
  //   e.preventDefault();

  // };

  onClickSubmit = (e) => {
    e.preventDefault();
    const { name, date, time, iteration } = this.state;
    const planningTime = `${date}:${time}`
    if (e.target.dataset.save) {
      // this.props.onAddCustomHabit({ name, planningTime, iteration })
      this.props.requestAddCustomHabit({ name, planningTime, iteration })
      this.props.closeModal()
    } else if (e.target.dataset.cancel) {
      this.props.closeModal();
    } else if (e.target.dataset.delete) {
      this.props.removeCastomHabit();
    }
  };

  handleChenge = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, createAt, iteration, planningTime } = this.props.habit; //! тест пропов

    return (
      <div className={style.castomHabitContainer}>
        <h2 className={style.castomHabitTitle}>Настройте привычку под себя</h2>
        <p className={style.castomHabitText}>
          так Вам будет удобнее достичь своей цели
        </p>
        <form onSubmit={this.handleSubmit} className={style.castomHabitForm}>
          <div className={style.castomHabitLableWrapper}>
            <label className={style.castomHabitLabel}>
              Название
              <input
                type="text"
                className={style.castomHabitName}
                name="name"
                value={this.state.name}
                onChange={this.handleChenge}
              />
            </label>
            <label className={style.castomHabitLabel}>
              Дата старта
              <input
                type="date"
                className={style.castomHabitDate}
                name="date"
                value={this.state.startDate}
                onChange={this.handleChenge}
              />
            </label>
            <label className={style.castomHabitLabel}>
              Время
              <input
                type="time"
                className={style.castomHabitTime}
                name="time"
                value={this.state.time}
                onChange={this.handleChenge}
              />
            </label>
            <label className={style.castomHabitLabel}>
              Повторение
              <select className={style.castomHabitSelect} name="iteration" value={this.state.repeat} onChange={this.handleChenge}>
                <option value="none" disabled>
                  выбрать
                </option>
                <option value="everyday">Ежедневно</option>
                <option value="onceInTwoDays">Раз в 2 дня</option>
                <option value="MonWedFri">ПН, СР, ПТ</option>
                <option value="TueThuSat">ВТ, ЧТ, СБ</option>
              </select>
            </label>
          </div>

          <button
            onClick={this.onClickSubmit}
            data-delete="delete"
            className={style.castomHabitDelete}
          >
            удалить привычку
          </button>
          <div className={style.castomHabitBtnWrapper}>
            <button
              type="submit"
              onClick={this.onClickSubmit}
              data-cancel="cancel"
              className={style.castomHabitCancelBtn}
            >
              Отмена
            </button>
            <button
              type="submit"
              onClick={this.onClickSubmit}
              data-save="save"
              className={style.castomHabitSaveBtn}
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  {
    onAddCustomHabit: castomHabitActions.addCustomHabit,
    requestAddCustomHabit: castomHabitOperation.addHabitOperation,
    removeCastomHabit: castomHabitOperation.removeHabitOperation,
  }
)(CastomHabit);
