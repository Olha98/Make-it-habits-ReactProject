import React, { Component } from "react";
import style from "./CastomHabit.module.css";
import { connect } from "react-redux";
import addCustomHabit from "../../redux/actions/castomHabitActions";
import addStartDate from "../../redux/actions/castomHabitActions";

class CastomHabit extends Component {
  // state = {
  //   name: "",
  //   startDate: "",
  //   time: "",
  //   repeat: ""
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, createAt, planningTime, iteration } = this.props; //! тест пропов
    this.props.onAddCustomHabit({ name, createAt, planningTime, iteration });
    this.props.closeModal();
    // this.props.onAddCustomStartDate({startDate})
  };

  handleChenge = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    console.log("this.props.HABIT", this.props); //! тест пропов
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
                name="name" //! тест пропов
                value={name} //! тест пропов
                onChange={this.handleChenge}
              />
            </label>
            <label className={style.castomHabitLabel}>
              Дата старта
              <input
                type="date"
                className={style.castomHabitDate}
                name="createAt" //! тест пропов
                value={createAt} //! тест пропов
                onChange={this.handleChenge}
              />
            </label>
            <label className={style.castomHabitLabel}>
              Время
              <input
                type="time"
                className={style.castomHabitTime}
                name="planningTime" //! тест пропов
                value={planningTime} //! тест пропов
                onChange={this.handleChenge}
              />
            </label>
            <label className={style.castomHabitLabel}>
              Повторение
              <select
                className={style.castomHabitSelect}
                name="iteration" //! тест пропов
                value={iteration} //! тест пропов
                onChange={this.handleChenge}
              >
                <option value="none" selected disabled>
                  выбрать
                </option>
                <option value="everyday">Ежедневно</option>
                <option value="onceInTwoDays">Раз в 2 дня</option>
                <option value="MonWedFri">ПН, СР, ПТ</option>
                <option value="TueThuSat">ВТ, ЧТ, СБ</option>
              </select>
            </label>
          </div>

          <button className={style.castomHabitDelete}>удалить привычку</button>
          <div className={style.castomHabitBtnWrapper}>
            <button className={style.castomHabitCancelBtn}>Отмена</button>
            <button type="submit" className={style.castomHabitSaveBtn}>
              Сохранить
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, {
  onAddCustomHabit: addCustomHabit,
  onAddCustomStartDate: addStartDate,
})(CastomHabit);
