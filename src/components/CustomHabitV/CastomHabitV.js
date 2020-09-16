import React, { Component } from "react";
import style from "./CastomHabitV.module.css";
import { connect } from "react-redux";
import castomHabitActions from "../../redux/actions/castomHabitActions";
import castomHabitOperation from "../../redux/operations/castomHabitOperation";
import modalBackDrop from "../ModalBackDrop/ModalBackDrop";

class CastomHabitV extends Component {
  state = {
    name: "",
    date: "",
    iteration: "",
    time: "",
   
  };


  onClickSubmit = e => {
    e.preventDefault();
    const { name, date, time, iteration } = this.state;
    const planningTime = `${date}:${time}`
    if (e.target.dataset.save) {
      // this.props.onAddCustomHabit({ name, planningTime, iteration })
      this.props.requestAddCustomHabit({ name, planningTime, iteration });
      this.props.close();
     
    } else if (e.target.dataset.cancel) {
      this.props.close();
    }
  };

  handleChenge = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { name, iteration, time, date  } = this.state;


    return (
      <div className={style.castomHabitContainer}>
        <h2 className={style.castomHabitTitle}>Настройте привычку под себя</h2>
        <p className={style.castomHabitText}>так Вам будет удобнее достичь своей цели</p>
        <form onSubmit={this.handleSubmit} className={style.castomHabitForm}>
          <div className={style.castomHabitLableWrapper}>
            <label className={style.castomHabitLabel}>
              Название
              <input type="text" className={style.castomHabitName} name="name" value={name} onChange={this.handleChenge} />
            </label>
            <label className={style.castomHabitLabel}>
              Дата старта
              <input
                type="date"
                className={style.castomHabitDate}
                name="date"
                value={date}
                onChange={this.handleChenge}
              />
            </label>
            <label className={style.castomHabitLabel}>
              Время
              <input
                type="time"
                className={style.castomHabitTime}
                name="time"
                value={time}
                onChange={this.handleChenge}
              />
            </label>
            <label className={style.castomHabitLabel}>
              Повторение
              <select
                className={style.castomHabitSelect}
                name="iteration"
                value={iteration}
                onChange={this.handleChenge}
              >
                <option value="none" selected>
                  выбрать
                </option>
                <option value="everyday">Ежедневно</option>
                <option value="onceInTwoDays">Раз в 2 дня</option>
                <option value="MonWedFri">ПН, СР, ПТ</option>
                <option value="TueThuSat">ВТ, ЧТ, СБ</option>
              </select>
            </label>
          </div>
          <div className={style.castomHabitBtnWrapper}>
            <button type="submit" onClick={this.onClickSubmit} data-cancel="cancel" className={style.castomHabitCancelBtn}>
              Отмена
            </button>
            <button type="submit" onClick={this.onClickSubmit} data-save="save" className={style.castomHabitSaveBtn}>
              Сохранить
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default modalBackDrop(connect(
  null,
  {
    onAddCustomHabit: castomHabitActions.addCustomHabit,
    removeCastomHabit: castomHabitActions.removeCustomHabit,
    requestAddCustomHabit: castomHabitOperation.addHabitOperation,
    requestRemoveCastomHabit: castomHabitOperation.removeHabitOperation
  }
)(CastomHabitV));
