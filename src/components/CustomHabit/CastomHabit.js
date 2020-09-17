import React, { Component } from 'react';
import style from './CastomHabit.module.css';
import { connect } from 'react-redux';
import castomHabitActions from '../../redux/actions/castomHabitActions';
import castomHabitOperation from '../../redux/operations/castomHabitOperation';
import modalBackDrop from '../ModalBackDrop/ModalBackDrop';

class CastomHabit extends Component {
  state = {
    name: '',
    date: '',
    iteration: '',
    time: '',
  };

  componentDidMount() {
    if (this.props.chosenHabit) {
      this.setState({ name: this.props.chosenHabit })
    }
    if (this.props.fromCheckList) {
      console.log('this.props.habit', this.props.habit)
      this.setState({ name: this.props.habit.name })
    }
  }

  onClickSubmit = e => {
    e.preventDefault();
    const { name, date, time, iteration } = this.state;
    const planningTime = `${date}:${time}`;
    let id = "";
    if (this.props.habit) {
      id = this.props.habit._id
    }
    if (e.target.dataset.save && this.props.fromCheckList) {
      this.props.requestPatchCustomHabit({ name, id});
      this.props.closeModal();
    } else if (e.target.dataset.save) {
      this.props.requestAddCustomHabit({ name, planningTime, iteration });
      this.props.closeModal();
    } else if (e.target.dataset.cancel) {
      this.props.closeModal();
    } else if (e.target.dataset.delete) {
      this.props.requestRemoveCastomHabit(this.props.habit._id);
      this.props.closeModal();
    } 
  };

  handleChenge = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  editNumber = number => {
    if (number < 10) {
      return `0${number}`;
    } else return number;
  };

  render() {
    const date = new Date(this.props.habit?.planningTime);
    const day = this.editNumber(date.getDate());
    const month = this.editNumber(date.getMonth());
    const year = date.getFullYear();
    const hour = this.editNumber(date.getHours());
    const minute = this.editNumber(date.getMinutes());
    const planningDate = `${year}-${month}-${day}`;
    const planningHours = `${hour}:${minute}`;
console.log('this.props', this.props)

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
                value={this.props.fromCheckList && planningDate}
                onChange={this.handleChenge}
              />
            </label>
            <label className={style.castomHabitLabel}>
              Время
              <input
                type="time"
                className={style.castomHabitTime}
                name="time"
                value={this.props.fromCheckList && planningHours}
                onChange={this.handleChenge}
              />
            </label>
            <label className={style.castomHabitLabel}>
              Повторение
              <select
                className={style.castomHabitSelect}
                name="iteration"
                value={this.props.fromCheckList && this.props.habit.iteration}
                onChange={this.handleChenge}
              >
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
          {this.props.fromCheckList &&
          <button
            onClick={this.onClickSubmit}
            data-delete="delete"
            className={style.castomHabitDelete}
          >
            удалить привычку
          </button>}
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

export default modalBackDrop(
  connect(null, {
    onAddCustomHabit: castomHabitActions.addCustomHabit,
    removeCastomHabit: castomHabitActions.removeCustomHabit,
    requestAddCustomHabit: castomHabitOperation.addHabitOperation,
    requestRemoveCastomHabit: castomHabitOperation.removeHabitOperation,
    requestPatchCustomHabit: castomHabitOperation.patchHabitOperation,
  })(CastomHabit),
);
